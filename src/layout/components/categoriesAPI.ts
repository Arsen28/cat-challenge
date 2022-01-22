import axios from 'axios';

// A mock function to mimic making an async request for data
export function fetchCategories() {
  return new Promise<{ data: number }>((resolve) => {
      axios.get(`https://api.thecatapi.com/v1/categories `)
        .then(res => {
          resolve({
            data: res.data
          });
        });
    }
  );
}
