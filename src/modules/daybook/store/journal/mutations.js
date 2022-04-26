// export const myAction = (state) =>{

// }

export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
};

export const updateEntry = (state, entry) => {
  console.log("mut updateEntries", entry);

  const idx = state.entries.map((e) => e.id).indexOf(entry.id);
  console.log({ idx });
  state.entries[idx] = entry;
  //entry actualizada
  //state.entry =>arreglo
  //buscar entry con ese id y actualizarlo
  //state.entries = ... entry
};

export const addEntry = (state, entry) => {
  console.log("mut addEntry: ", entry);

  state.entries.unshift(entry);
  //state.entries = [entry, ...state.entries]

  //state-> entries-> nueva entrada debe ser la primera
};
