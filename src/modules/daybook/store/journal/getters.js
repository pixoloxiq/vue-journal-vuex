// export const myGetter = ( state ) =>{
// return state.algo

// }

export const getEntriesByTerm =
  (state) =>
  (term = "") => {
    if (term.length === 0) return state.entries;

    return state.entries.filter((entry) =>
      entry.text.toLowerCase().includes(term.toLowerCase())
    );
  };
//ID
export const getEntryById =
  (state) =>
  (id = "") => {
    state.entries.forEach((entry) => {
      if (entry.id === id) return entry;
    });

    const entry = state.entries.find((entry) => entry.id === id);
    if (!entry) return;
    return { ...entry };
  };
