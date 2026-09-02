import { useMemo, useState } from "react";
import PageHero from "../components/PageHero.jsx";
import CTASection from "../components/CTASection.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { MACHINES, MACHINE_CATEGORIES } from "../data/site.js";
import "./Equipment.css";

export default function Equipment() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MACHINES.filter((m) => {
      const catOk = category === "All" || m.category === category;
      const qOk =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.make.toLowerCase().includes(q) ||
        m.capacity.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [category, query]);

  return (
    <>
      <PageHero
        eyebrow="Equipment"
        title="The machine list"
        subline="Every machine on the GTech floor, from the source company profile. Filter by area or search by name, make or capacity."
      />

      <section className="section">
        <div className="container">
          <Reveal className="equip__controls">
            <div className="equip__filters" role="group" aria-label="Filter by category">
              {MACHINE_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`equip__chip ${category === cat ? "is-active" : ""}`}
                  aria-pressed={category === cat}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <label className="equip__search">
              <span className="sr-only">Search machines</span>
              <input
                type="search"
                placeholder="Search name, make, capacity…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
          </Reveal>

          <Reveal className="equip__count" aria-live="polite">
            {rows.length} machine{rows.length === 1 ? "" : "s"}
          </Reveal>

          <Reveal className="equip__table-wrap">
            <table className="equip__table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Make</th>
                  <th scope="col">Capacity</th>
                  <th scope="col">Category</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((m, i) => (
                  <tr key={`${m.name}-${i}`}>
                    <td>{m.name}</td>
                    <td>{m.make}</td>
                    <td>{m.capacity}</td>
                    <td>
                      <span className={`equip__tag equip__tag--${m.category.toLowerCase()}`}>
                        {m.category}
                      </span>
                    </td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr>
                    <td colSpan={4} className="equip__empty">
                      No machines match that filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
