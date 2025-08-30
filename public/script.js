const container = document.getElementById("container");
const button = document.getElementById("render");
const loading = document.getElementById("loading");

async function fetchData() {
  try {
    loading.style.display = "block";
    const res = await fetch("/fs");
    return await res.json();
  } catch (err) {
    console.log("err fetching data", err);
  } finally {
    loading.style.display = "none";
  }
}

button.addEventListener("click", async () => {
  container.innerHTML = "";
  const data = await fetchData();
  if (!data) return;

  data.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = item.url;
    a.textContent = item.title || "(no title)";

    li.appendChild(a);
    container.appendChild(li);
  });
});
