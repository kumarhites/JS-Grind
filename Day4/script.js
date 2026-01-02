const statusEl = document.getElementById("status");
const listEl = document.getElementById("list");

async function fetchUsers() {
  // TODO:
  // 1. show loading
  statusEl.innerText = "Loading...";
  // 2. fetch users
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(url);
    // 3. handle error
    if (!response.ok) {
      statusEl.innerText = response.status;
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    // 4. render users
    statusEl.innerText = "";
    const listItems = data.map((ele) => {
      return `<li>
                Name: ${ele.name}
            </li>`;
    });
    const listHTML = listItems.join("");
    listEl.innerHTML = listHTML;
    console.log(data);
  } catch (error) {
    statusEl.innerText = "Failed to load users";
    console.error(error);
  }
}

fetchUsers();
