export const fetchAllPokemon = () => {
  return (
    $.ajax({
      url: 'api/pokemon',
      method: 'GET',
      datatype: 'JSON'
    })
  );
};

export const fetchSinglePokemon = (id) => {
  return (
    $.ajax({
      url: `api/pokemon/${id}`,
      method: 'GET',
      datatype: 'JSON'
    })
  );
};
