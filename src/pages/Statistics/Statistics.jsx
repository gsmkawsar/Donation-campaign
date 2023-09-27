

import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';


const Statistics = () => {


  const donationItems = JSON.parse(localStorage.getItem('donations'))
  let num = donationItems?.length + 0;


  const data = [
    { name: 'Your Donation', value: num },
    { name: 'Total Donation', value: 12 },

  ];

  const COLORS = ['#00C49F', 'red',];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <div>
        <div className="row d-flex justify-content-center text-center">

          <div className="col-md-8 flex justify-center items-center">
            <ResponsiveContainer width={400} height={400} className="text-center">
              <PieChart width={400} height={400}>
                <Legend layout="vertical" verticalAlign="top" align="top" />
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  )
}
export default Statistics;