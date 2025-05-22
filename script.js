// Toggle responsive menu
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
  }
  
  // Sample data
  const items = Array.from({ length: 242 }, (_, i) => `Item ${i + 1}`);
  const itemsPerPage = 24;
  let currentPage = 1;
  
  function renderItems(page) {
    const container = document.getElementById('items-container');
    container.innerHTML = '';
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = items.slice(start, end);
  
    paginatedItems.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item';
      div.textContent = item;
      container.appendChild(div);
    });
  }
  
  function renderPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    const totalPages = Math.ceil(items.length / itemsPerPage);
  
    for (let i = 1; i <= totalPages; i++) {
      const span = document.createElement('span');
      span.className = 'page' + (i === currentPage ? ' active' : '');
      span.textContent = i;
      span.addEventListener('click', () => {
        currentPage = i;
        renderItems(currentPage);
        renderPagination();
      });
      pagination.appendChild(span);
    }
  }
  
  // Initial render
  renderItems(currentPage);
  renderPagination();
  