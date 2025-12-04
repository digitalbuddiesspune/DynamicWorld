import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../lib/apiClient";
import { extractPayload } from "../utils/extractPayload";
import DataTable from "../components/ui/DataTable";
import SearchInput from "../components/ui/SearchInput";
import { Plus, X, Trash2 } from "lucide-react";

const NewsPage = () => {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ newsTitle: "", link: "" });
  const queryClient = useQueryClient();

  // Fetch all news
  const {
    data = [],
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const response = await apiClient.get("/news");
      return extractPayload(response);
    },
  });

  // Create news mutation
  const createMutation = useMutation({
    mutationFn: async (newsData) => {
      const response = await apiClient.post("/createNews", newsData);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
      setFormData({ newsTitle: "", link: "" });
      setShowForm(false);
    },
  });

  // Delete news mutation
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const response = await apiClient.delete(`/news/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
  });

  const handleDelete = (id, newsTitle) => {
    if (window.confirm(`Are you sure you want to delete "${newsTitle}"?`)) {
      deleteMutation.mutate(id);
    }
  };

  // Filter news based on search
  const filteredRows = data.filter((row) => {
    if (!search.trim()) return true;
    const lower = search.toLowerCase();
    return (
      row.newsTitle?.toLowerCase().includes(lower) ||
      row.link?.toLowerCase().includes(lower)
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.newsTitle.trim() || !formData.link.trim()) {
      alert("Please fill in all fields");
      return;
    }
    createMutation.mutate(formData);
  };

  const columns = [
    {
      label: "Title",
      render: (row) => (
        <div className="max-w-md">
          <p className="font-medium text-slate-900">{row.newsTitle ?? "—"}</p>
        </div>
      ),
    },
    {
      label: "Link",
      render: (row) => (
        <a
          href={row.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline truncate max-w-xs block"
        >
          {row.link ?? "—"}
        </a>
      ),
    },
    {
      label: "Created",
      render: (row) =>
        row.createdAt
          ? new Date(row.createdAt).toLocaleDateString()
          : "—",
      align: "center",
    },
    {
      label: "Updated",
      render: (row) =>
        row.updatedAt
          ? new Date(row.updatedAt).toLocaleDateString()
          : "—",
      align: "center",
    },
    {
      label: "Action",
      render: (row) => (
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={() => handleDelete(row._id, row.newsTitle)}
            disabled={deleteMutation.isPending}
            className="rounded-md p-2 text-rose-600 transition hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            title="Delete news"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ),
      align: "center",
    },
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">News</h2>
          <p className="text-sm text-slate-500">
            Manage news items displayed in the promotion strip on the homepage.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search news…"
          />
          <button
            type="button"
            onClick={() => setShowForm(!showForm)}
            className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 focus:outline-none focus:ring"
          >
            <Plus className="h-4 w-4" />
            Add 
          </button>
          <button
            type="button"
            onClick={() => refetch()}
            className="rounded-full border border-slate-200 bg-white px-6 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 focus:outline-none focus:ring"
            disabled={isFetching}
          >
            {isFetching ? "Refreshing…" : "Refresh"}
          </button>
        </div>
      </div>

      {/* Add News Form */}
      {showForm && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Add New News</h3>
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setFormData({ newsTitle: "", link: "" });
              }}
              className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="newsTitle"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                News Title *
              </label>
              <input
                type="text"
                id="newsTitle"
                value={formData.newsTitle}
                onChange={(e) =>
                  setFormData({ ...formData, newsTitle: e.target.value })
                }
                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="Enter news title"
                required
              />
            </div>
            <div>
              <label
                htmlFor="link"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Link *
              </label>
              <input
                type="url"
                id="link"
                value={formData.link}
                onChange={(e) =>
                  setFormData({ ...formData, link: e.target.value })
                }
                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="https://example.com"
                required
              />
            </div>
            {createMutation.isError && (
              <div className="rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
                {createMutation.error?.response?.data?.message ??
                  createMutation.error?.message ??
                  "Failed to create news"}
              </div>
            )}
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={createMutation.isPending}
                className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {createMutation.isPending ? "Adding…" : "Add News"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setFormData({ newsTitle: "", link: "" });
                }}
                className="rounded-lg border border-slate-300 bg-white px-6 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Success Messages */}
      {createMutation.isSuccess && (
        <div className="rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-700">
          News added successfully!
        </div>
      )}
      {deleteMutation.isSuccess && (
        <div className="rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-700">
          News deleted successfully!
        </div>
      )}
      {deleteMutation.isError && (
        <div className="rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
          {deleteMutation.error?.response?.data?.message ??
            deleteMutation.error?.message ??
            "Failed to delete news"}
        </div>
      )}

      {/* Error State */}
      {isError ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-rose-700">
          <h3 className="text-base font-semibold">Unable to load data</h3>
          <p className="mt-2 text-sm">
            {error?.response?.data?.message ??
              error?.message ??
              "Unknown error"}
          </p>
          <button
            type="button"
            onClick={() => refetch()}
            className="mt-4 rounded-full border border-rose-200 bg-white px-5 py-2 text-sm font-medium text-rose-600 transition hover:bg-rose-100 focus:outline-none focus:ring"
          >
            Try again
          </button>
        </div>
      ) : (
        <DataTable
          columns={columns}
          rows={filteredRows}
          isLoading={isLoading}
          emptyMessage={
            search
              ? "No matches found for your search terms."
              : "No news available yet. Click 'Add News' to create one."
          }
        />
      )}
    </div>
  );
};

export default NewsPage;

