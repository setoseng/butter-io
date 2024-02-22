"use server";

export async function churnRequest(formData) {
  const tenure = parseInt(formData.get("tenure"));
  const phoneService = formData.get("phoneService");
  const onlineSecurity = formData.get("onlineSecurity");
  const onlineBackup = formData.get("onlineBackup");
  const paperlessBilling = formData.get("paperlessBilling");
  const monthlyCharges = parseInt(formData.get("monthlyCharges"));
  const totalCharges = parseInt(formData.get("totalCharges"));
  const internetService = formData.get("internetService");
  const contract = formData.get("contract");
  const paymentMethod = formData.get("paymentMethod");

  const data = {
    tenure: tenure,
    PhoneService: phoneService,
    OnlineSecurity: onlineSecurity,
    OnlineBackup: onlineBackup,
    PaperlessBilling: paperlessBilling,
    MonthlyCharges: monthlyCharges,
    TotalCharges: totalCharges,
    InternetService: internetService,
    Contract: contract,
    PaymentMethod: paymentMethod,
  };

  try {
    const response = await fetch(
      "https://butters-6c0bef049268.herokuapp.com/predict",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  } catch (err) {
    return { error: `An error occurred, ${err}"` };
  }
}
