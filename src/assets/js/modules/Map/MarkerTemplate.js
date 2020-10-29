// Генерация шаблона маркера
export const generateMarkerTemplate = (id) => {
  return `
    <div data-point-id=${id} class="map__point">
        <svg width="26" height="44" viewBox="0 0 26 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0014 1C6.37228 1 1 6.37228 1 13.0014C1 18.6831 4.94843 23.442 10.2523 24.6851L13.0014 42.4038L15.7505 24.6824V24.6851C21.0516 23.442 25 18.6831 25 13.0014C25.0027 6.37501 19.6305 1 13.0014 1ZM13.0014 19.2499C9.55128 19.2499 6.75562 16.4542 6.75562 13.0041C6.75562 9.55402 9.55128 6.75836 13.0014 6.75836C16.4515 6.75836 19.2471 9.55402 19.2471 13.0041C19.2499 16.4515 16.4515 19.2499 13.0014 19.2499Z" fill="#FFDC00" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.0021 19.2472C16.4515 19.2472 19.2478 16.4509 19.2478 13.0014C19.2478 9.55201 16.4515 6.75569 13.0021 6.75569C9.55266 6.75569 6.75635 9.55201 6.75635 13.0014C6.75635 16.4509 9.55266 19.2472 13.0021 19.2472Z" stroke="black" stroke-width="1.02678" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
  `
}
