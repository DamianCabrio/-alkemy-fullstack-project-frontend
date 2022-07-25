import {
  AreaChart as AreaChartComponent,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

function AreaChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChartComponent data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="total"
          fill="#419D78"
          name="Total de operaciones"
          stackId="1"
        />
        <Area
          type="monotone"
          dataKey="total_amount"
          fill="#592E83"
          name="Total operado"
          stackId="1"
        />
      </AreaChartComponent>
    </ResponsiveContainer>
  );
}
export default AreaChart;
