const affiliateTag = "liafiz0e-20";

const productMap = {
  LZ123: "https://www.amazon.com/dp/B0ABC123",
  LZ456: "https://www.amazon.com/dp/B0XYZ456",
};⅔

document.getElementById("productCode").addEventListener("keyup", e => {
  if (e.key === "Enter") {
    document.getElementById("searchAmazon").click();
  }
});

  if (!productMap[code]) {
    alert("Kode tidak ditemukan");
    return;
  }

  const baseUrl = productMap[code];
  const finalUrl = `${baseUrl}?tag=${affiliateTag}`;

  window.open(finalUrl, "_blank");
});
