
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export function Dashboard() {
  // Mock data for charts
  const commentTrendData = [
    { name: 'Jan', comments: 120 },
    { name: 'Feb', comments: 180 },
    { name: 'Mar', comments: 250 },
    { name: 'Apr', comments: 310 },
    { name: 'May', comments: 290 },
    { name: 'Jun', comments: 350 },
  ];

  const policyTypeData = [
    { name: 'Environmental', value: 35 },
    { name: 'Infrastructure', value: 25 },
    { name: 'Healthcare', value: 20 },
    { name: 'Education', value: 15 },
    { name: 'Other', value: 5 },
  ];

  const agencyResponseData = [
    { name: 'Responded', value: 68 },
    { name: 'In Progress', value: 22 },
    { name: 'Not Started', value: 10 },
  ];

  const COLORS = ['#9b87f5', '#0EA5E9', '#22c55e', '#eab308', '#F97316'];
  const RESPONSE_COLORS = ['#22c55e', '#eab308', '#ef4444'];

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold mb-4">Real-Time Engagement Dashboard</h2>
          <p className="text-muted-foreground text-lg">
            Track public participation and see how citizen input is shaping government decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
            <h3 className="font-semibold text-lg mb-4">Monthly Comment Trends</h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={commentTrendData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="comments" 
                    stroke="#9b87f5" 
                    strokeWidth={2} 
                    dot={{ r: 4 }} 
                    activeDot={{ r: 6 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Public participation has increased by 42% over the last 6 months
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
            <h3 className="font-semibold text-lg mb-4">Policy Topics Breakdown</h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={policyTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {policyTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Environmental policies receive the highest public engagement
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
            <h3 className="font-semibold text-lg mb-4">Agency Response Rates</h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={agencyResponseData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value">
                    {agencyResponseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={RESPONSE_COLORS[index]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              68% of public comments received official agency responses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
