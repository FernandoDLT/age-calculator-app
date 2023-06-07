import './App.css';
import { Result } from './components/Result';
import { Input } from './components/Input';
import { Divider } from './components/Divider';
import { useState } from 'react';

function App() {
  const [day, setDay] = useState(undefined);
  const [month, setMonth] = useState(undefined);
  const [year, setYear] = useState(undefined);

  const [timeDiff, setTimeDiff] = useState({});

  const refreshTimeDiff = () => {
    if (day === '' || !day || month === '' || !month || year === '' || !year) {
      setTimeDiff({});
      console.log('Soon exit');
      return;
    }

    const currentDate = new Date();
    const stateDate = new Date(year, month, day);
    const diff = Math.floor(currentDate.getTime() - stateDate.getTime());
    const dayd = 1000 * 60 * 60 * 24;

    const daysd = Math.floor(diff / dayd);
    const monthsd = Math.floor(daysd / 31);
    const yearsd = Math.floor(monthsd / 12);

    setTimeDiff({ days: daysd, months: monthsd, years: yearsd });
  };

  return (
    <div className="app">
      <div className="input-hoc">
        <Input
          label={'day'}
          onChange={(e) => {
            refreshTimeDiff();
            setDay(e.target.value);
          }}
        />
        <Input
          label={'month'}
          onChange={(e) => {
            refreshTimeDiff();
            setMonth(e.target.value);
          }}
        />
        <Input
          label={'year'}
          onChange={(e) => {
            refreshTimeDiff();
            setYear(e.target.value);
          }}
        />
      </div>
      <Divider />
      <Result
        days={timeDiff.days}
        months={timeDiff.months}
        years={timeDiff.years}
      />
    </div>
  );
}

export default App;
