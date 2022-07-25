import {
  BarChart as BarChartComponent,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

function BarChart({data}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChartComponent data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#419D78" name="Total de operaciones" />
        <Bar dataKey="total_amount" fill="#592E83" name="Total operado" />
      </BarChartComponent>
    </ResponsiveContainer>
  );
}
export default BarChart