const postVendors = async (vendorData) => {
  const {
    vendorName,
    bankAccountNo,
    bankName,
    addressLine1,
    addressLine2,
    city,
    country,
    zipCode,
  } = vendorData;

  let data = await fetch("https://vendor-hub-75wt.vercel.app/api/vendor", {
    method: "POST",
    body: JSON.stringify({
      vendorName,
      bankAccountNo,
      bankName,
      addressLine1,
      addressLine2,
      city,
      country,
      zipCode,
    }),
  });
  data = await data.json();
  return data;
};

export default postVendors;
