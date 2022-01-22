import axios from 'axios';

// A mock function to mimic making an async request for data
export function fetchCats(limit = 10, page = 1, category_id = -1) {
  return new Promise<{ data: number }>((resolve) => {
    if (category_id === -1)
      axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}`)
        .then(res => {
          resolve({
            data: res.data
          });
        });
    else
      axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&category_ids=${category_id}`)
      .then(res => {
        resolve({
          data: res.data
        });
      });
    }
  );
}
