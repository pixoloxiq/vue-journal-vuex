import journalApi from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get("/entries.json");
  const entries = [];
  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }

  commit("setEntries", entries);
};

export const updateEntry = async ({ commit }, entry) => {
  console.log("act updateEntry:", entry);
  //entry debe ser un parametro
  //extraer solo lo que se necesita -id
  // await journalApi.put(path +.json, datatosave)
  const { date, picture, text } = entry;
  let dataToSave = { date, picture, text };

  const response = await journalApi.put(
    `/entries/${entry.id}.json`,
    dataToSave
  );
  console.log(response);
  //commit de una muitation 'updateEntry'

  commit("updateEntry", { ...entry });
};

export const createEntry = async ({ commit }, entry) => {
  //dataToSave
  const { date, picture, text } = entry;
  let dataToSave = { date, picture, text };

  //const {data} = await journalApi.post(path, dataToSave)
  const { data } = await journalApi.post("/entries.json", dataToSave);
  //data name:id
  console.log(data);

  //entry.id = data.id
  entry.id = data.name;

  //commit -> addEntry
  commit("addEntry", { ...entry });

  return data.name;
};
