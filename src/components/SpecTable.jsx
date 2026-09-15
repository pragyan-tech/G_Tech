import "./SpecTable.css";

/**
 * Machine/spec data table with a horizontal-scroll wrapper (the table
 * scrolls internally on narrow screens; it never widens the page). Used on
 * capability detail pages to show machine specs.
 *
 * @param {Object} props
 * @param {string} [props.caption] - Visually-hidden `<caption>` for screen readers.
 * @param {string[]} props.columns - Column header labels, in order.
 * @param {Array<Array<string|number>>} props.rows - Row data; each inner array's cells map positionally to `columns`.
 * @returns {JSX.Element}
 */
export default function SpecTable({ caption, columns, rows }) {
  return (
    <div className="spec-table__wrap">
      <table className="spec-table">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col} scope="col">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
