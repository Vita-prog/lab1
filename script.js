// --- 1. ДАНІ ДЛЯ РЕНДЕРИНГУ ---
const carsData = [
    { id: "001", model: "Toyota RAV4", year: 2023, body: "Кросовер", color: "Білий перламутр", price: "34,500", status: "В наявності" },
    { id: "002", model: "BMW 530i", year: 2022, body: "Седан", color: "Чорний металік", price: "52,000", status: "Продано" },
    { id: "003", model: "Audi Q7", year: 2024, body: "Позашляховик", color: "Сірий", price: "78,000", status: "Очікується" }
];

const customersData = [
    { id: "C-101", name: "Коваленко Петро Іванович", phone: "+380671112233", email: "kovalenko.p@email.com", date: "12.05.2024", loyalty: "VIP" },
    { id: "C-102", name: "Мельник Ольга Сергіївна", phone: "+380934445566", email: "olga.melnik@email.com", date: "22.08.2025", loyalty: "Новий" },
    { id: "C-103", name: "Шевченко Андрій Васильович", phone: "+380507778899", email: "sheva.andriy@email.com", date: "05.11.2023", loyalty: "Постійний" }
];

const managersData = [
    { id: "M-01", name: "Бондаренко Олександр Володимирович", position: "Старший менеджер", date: "10.01.2021", sales: 142, phone: "+380670001122" },
    { id: "M-02", name: "Ткаченко Марина Олегівна", position: "Менеджер з продажів", date: "15.06.2023", sales: 58, phone: "+380930003344" }
];

// --- 2. ФУНКЦІЇ ДЛЯ ДИНАМІЧНОЇ ГЕНЕРАЦІЇ ТАБЛИЦЬ ---
function renderTables() {
    // Рендер автомобілів
    const carsTbody = document.getElementById('cars-tbody');
    if (carsTbody) {
        carsTbody.innerHTML = carsData.map(car => `
            <tr>
                <td>${car.id}</td>
                <td>${car.model}</td>
                <td>${car.year}</td>
                <td>${car.body}</td>
                <td>${car.color}</td>
                <td>${car.price}</td>
                <td>${car.status}</td>
            </tr>
        `).join('');
    }

    // Рендер клієнтів
    const customersTbody = document.getElementById('customers-tbody');
    if (customersTbody) {
        customersTbody.innerHTML = customersData.map(customer => `
            <tr>
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${customer.phone}</td>
                <td>${customer.email}</td>
                <td>${customer.date}</td>
                <td>${customer.loyalty}</td>
            </tr>
        `).join('');
    }

    // Рендер менеджерів
    const managersTbody = document.getElementById('managers-tbody');
    if (managersTbody) {
        managersTbody.innerHTML = managersData.map(manager => `
            <tr>
                <td>${manager.id}</td>
                <td>${manager.name}</td>
                <td>${manager.position}</td>
                <td>${manager.date}</td>
                <td>${manager.sales}</td>
                <td>${manager.phone}</td>
            </tr>
        `).join('');
    }
}

// --- 3. ЧИСТА ЛОГІКА ПЕРЕМИКАННЯ ТАБІВ ---
function initTabs() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetTabId = event.currentTarget.getAttribute('data-tab');

            // Ховаємо всі таби та прибираємо стиль active
            tabContents.forEach(content => {
                content.style.display = 'none';
                content.classList.remove('active');
            });

            // Прибираємо клас active у всіх кнопок меню
            tabLinks.forEach(item => item.classList.remove('active'));

            // Показуємо поточний таб та активуємо натиснуту кнопку
            const targetTab = document.getElementById(targetTabId);
            if (targetTab) {
                targetTab.style.display = 'block';
                targetTab.classList.add('active');
            }
            event.currentTarget.classList.add("active");
        });
    });
}

// Запуск усіх процесів після завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
    renderTables();
    initTabs();
});