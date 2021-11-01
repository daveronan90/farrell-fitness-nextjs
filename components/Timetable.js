import FFLogo from "../public/assets/svg/FFTimetable.svg";

const Timetable = ({ tableData }) => {
  return (
    <div className="flex justify-center">
      <table className="m-2 sm:m-8 w-full table-fixed text-white text-center text-xxxs font-extrabold sm:text-base">
        <thead>
          <tr>
            <th className="w-1/12">
              <div className="w-full flex justify-center items-center">
                <FFLogo className="transform scale-75 lg:scale-100" />
              </div>
            </th>
            <th className="border w-1/12 bg-bioGray">MON</th>
            <th className="border w-1/12 bg-bioGray">TUES</th>
            <th className="border w-1/12 bg-bioGray">WED</th>
            <th className="border w-1/12 bg-bioGray">THUR</th>
            <th className="border w-1/12 bg-bioGray">FRI</th>
            <th className="border w-1/12 bg-bioGray">SAT</th>
            <th className="border w-1/12 bg-bioGray">SUN</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(
            (
              { startTime, endTime, mon, tues, wed, thur, fri, sat, sun },
              idx
            ) => (
              <tr
                key={idx}
                className={` ${idx !== 8 ? "border-b border-ffYellow" : ""}`}
              >
                <td className="border border-white bg-bioGray">
                  {startTime}
                  <br />
                  {endTime}
                </td>
                <td className="bg-black bg-opacity-70 border border-ffYellow text-xxxs sm:text-sm">
                  {mon.split("\n").map((item, idx) => (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  ))}
                </td>
                <td className="bg-black bg-opacity-70 border border-ffYellow text-xxxs sm:text-sm">
                  {tues.split("\n").map((item, idx) => (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  ))}
                </td>
                <td className="bg-black bg-opacity-70 border border-ffYellow text-xxxs sm:text-sm">
                  {wed.split("\n").map((item, idx) => (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  ))}
                </td>
                <td className="bg-black bg-opacity-70 border border-ffYellow text-xxxs sm:text-sm">
                  {thur.split("\n").map((item, idx) => (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  ))}
                </td>
                <td className="bg-black bg-opacity-70 border border-ffYellow text-xxxs sm:text-sm">
                  {fri.split("\n").map((item, idx) => (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  ))}
                </td>
                <td className="bg-black bg-opacity-70 border border-ffYellow text-xxxs sm:text-sm">
                  {sat.split("\n").map((item, idx) => (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  ))}
                </td>
                <td className="bg-black bg-opacity-70 border border-ffYellow text-xxxs sm:text-sm">
                  {sun.split("\n").map((item, idx) => (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  ))}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
