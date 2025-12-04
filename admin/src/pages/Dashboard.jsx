import {
  BarChart3,
  BookOpen,
  GraduationCap,
  LifeBuoy,
  Target,
} from "lucide-react";
import DataTable from "../components/ui/DataTable";
import StatCard from "../components/ui/StatCard";
import { entityDefinitions } from "../data/entities";
import { useEntitySummaries } from "../hooks/useEntitySummaries";

const Dashboard = () => {
  const entityQueries = useEntitySummaries(entityDefinitions);
  const isLoading = entityQueries.some((query) => query.isLoading);

  const totalRecords = entityQueries.reduce(
    (sum, query) => sum + (query.data?.length ?? 0),
    0
  );

  const latestUpdates = entityDefinitions
    .map((entity, index) => ({
      entity,
      query: entityQueries[index],
    }))
    .filter(({ query }) => query.data && query.data.length)
    .map(({ entity, query }) => ({
      name: entity.name,
      latest: query.data[0],
      columns: entity.columns,
    }))
    .slice(0, 3);

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
          Overview
        </h2>
        <p className="text-sm text-slate-500">
          Keep an eye on the health of Dynamic World’s content universe.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            icon={BarChart3}
            title="Managed Records"
            value={isLoading ? "…" : totalRecords}
            subtitle="Across all collections"
            tone="blue"
          />
          <StatCard
            icon={GraduationCap}
            title="No"
            value={
              isLoading
                ? "…"
                : (entityQueries[1]?.data?.length ?? 0) +
                  (entityQueries[2]?.data?.length ?? 0)
            }
            subtitle="Online & distance"
            tone="violet"
          />
          <StatCard
            icon={BookOpen}
            title="Regular Universities"
            value={isLoading ? "…" : entityQueries[3]?.data?.length ?? 0}
            subtitle="Campus based programs"
            tone="emerald"
          />
          <StatCard
            icon={LifeBuoy}
            title="Support Catalogues"
            value={isLoading ? "…" : entityQueries[4]?.data?.length ?? 0}
            subtitle="Skill courses"
            tone="amber"
          />
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Recent Highlights
            </h3>
            <p className="text-sm text-slate-500">
              A snapshot from the most recently fetched collections.
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {latestUpdates.map(({ name, latest, columns }) => (
            <div key={name} className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Latest record
                  </p>
                  <h4 className="text-base font-semibold text-slate-900">
                    {name}
                  </h4>
                </div>
                <Target className="h-5 w-5 text-slate-400" />
              </div>
              <DataTable
                columns={columns.slice(0, 3)}
                rows={[latest]}
                isLoading={false}
                emptyMessage="No data yet."
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

