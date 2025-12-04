import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Lal Kitab Privacy Policy!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Lal Kitab GPT Privacy Policy!" />
        <p className="description">
          Sure — I can create a **Privacy Policy** for *Lal Kitab Astrologer GPT* modeled on the tone and structure of the one from **JyotishAI**, while tailoring it to how *your GPT* works (i.e., an AI astrology assistant that uses user-provided birth data and API calls to deliver astrological readings).

Below is a **draft privacy policy** written in professional website format:

---

## **Privacy Policy for Lal Kitab Astrologer GPT**

**Last Updated:** December 1, 2025

Welcome to **Lal Kitab Astrologer GPT** (“we,” “our,” “us”). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard information when you use our astrology services powered by artificial intelligence (AI).

---

### **1. Information We Collect**

When you use Lal Kitab Astrologer GPT, we may collect the following information:

#### **a. Personal Information Provided by You**

To generate astrological charts and predictions, we may request:

* Full Name (optional)
* Date of Birth
* Time of Birth
* Place of Birth (used to determine latitude & longitude)
* Preferred Language (English, Hindi, or Gujarati)

This information is necessary for accurate horoscope generation according to *Lal Kitab* and *Vedic astrology* principles.

#### **b. Automatically Collected Information**

When interacting with the GPT interface, certain technical information may be automatically logged (depending on the platform), such as:

* Browser type and settings
* Device type and operating system
* Date and time of access

We **do not** collect or store sensitive device identifiers, cookies, or personal browsing data beyond what is required for basic functionality.

---

### **2. How We Use Your Information**

We use the information solely for:

* Generating personalized astrological readings and remedies
* Analyzing planetary positions based on birth details
* Providing current planetary influences, dasha, and predictions
* Improving the accuracy and quality of astrological interpretations

Your data is **never sold or shared** with third-party advertisers or marketing agencies.

---

### **3. Data Storage and Retention**

* Your birth details and generated charts may be **temporarily processed** for the duration of your active session.
* We **do not permanently store** personal data unless explicitly stated or required for specific user-requested services.
* Once the session ends, all entered personal information is automatically deleted or anonymized.

---

### **4. Data Sharing**

We may share minimal data only with trusted services that enable astrological calculations (e.g., verified astrology APIs).
All such services adhere to strict confidentiality and data protection standards.
We do **not** disclose personal information to any third party for marketing, analytics, or profiling purposes.

---

### **5. Security of Your Information**

We implement reasonable administrative, technical, and physical safeguards to protect your personal data from unauthorized access, misuse, or disclosure.
However, please note that no online service can guarantee complete security.

---

### **6. Your Rights**

You have the right to:

* Access, correct, or delete your data (where applicable)
* Withdraw consent for processing
* Request information on how your data is used

To exercise these rights, please contact us at **[insert your contact email or form]**.

---

### **7. Children’s Privacy**

Our services are **not intended for users under the age of 16**.
We do not knowingly collect or store information from minors.
If you believe a child has provided us with personal data, please contact us for immediate deletion.

---

### **8. Updates to This Policy**

We may occasionally update this Privacy Policy to reflect new legal or operational practices.
Any changes will be posted with a revised “Last Updated” date.

---

### **9. Contact Us**

If you have questions, concerns, or complaints regarding this Privacy Policy or our data handling practices, please contact us at:

📧 **Email:** [insert your email]
🌐 **Website:** [insert your website or GPT link]

---

### **10. Consent**

By using **Lal Kitab Astrologer GPT**, you consent to the collection and use of your information as outlined in this Privacy Policy.

---

Would you like me to format this for **your website (HTML page)** or as a **PDF/Word document** for legal or platform submission purposes? I can also tailor it further if you tell me:

* Whether your GPT runs **inside ChatGPT only**, or also on a **website/app**,
* And whether you want to show a **short version (summary)** or **full legal version**.
<code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
