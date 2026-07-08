/* Freight request form behavior. */
document.addEventListener("DOMContentLoaded", () => {
  const origin = document.getElementById("origin");
  const destination = document.getElementById("destination");
  const cargo = document.getElementById("cargo");
  const freightDate = document.getElementById("freightDate");
  const vehicleType = document.getElementById("vehicleType");
  const link = document.getElementById("freightQuote");

  const form = document.getElementById("freightForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const lane = `${origin.value || 'Origin TBD'} to ${destination.value || 'Destination TBD'}`;
    const url = DozrWhatsApp.requestFreight(
      lane,
      cargo.value || "Cargo TBD",
      freightDate.value || "Pickup date TBD",
      vehicleType.value || "Vehicle TBD"
    );
    window.location.href = url;
  });
});
