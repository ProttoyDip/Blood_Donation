import React, { useState } from "react";
import Navbar from "../Navbar"; 
import "../styles.css";

export default function BloodRequestForm() {
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",               
    bloodGroup: "",
    hospitalName: "",
    District: "",
    Upazila: "",
    contactNumber: "",
    date: "",
  });

 const upazilasByDistrict = {
  Dhaka: [
    "Dhamrai", "Dohar", "Keraniganj", "Nawabganj", "Savar"
  ],
  Faridpur: [
    "Alfadanga", "Bhanga", "Boalmari", "Charbhadrasan", "Madhukhali", "Nagarkanda", "Sadarpur", "Saltha"
  ],
  Gazipur: [
    "Gazipur Sadar", "Kaliakair", "Kaliganj", "Kapasia", "Sreepur"
  ],
  Gopalganj: [
    "Gopalganj Sadar", "Kashiani", "Kotalipara", "Muksudpur", "Tungipara"
  ],
  Kishoreganj: [
    "Austagram", "Bajitpur", "Bhairab", "Hossainpur", "Itna", "Karimganj", "Katiadi", "Kishoreganj Sadar", "Kuliarchar", "Mithamain", "Nikli", "Pakundia", "Tarail"
  ],
  Madaripur: [
    "Kalkini", "Madaripur Sadar", "Rajoir", "Shibchar"
  ],
  Manikganj: [
    "Daulatpur", "Ghior", "Harirampur", "Manikganj Sadar", "Saturia", "Shivalaya", "Singair"
  ],
  Munshiganj: [
    "Gazaria", "Lohajang", "Munshiganj Sadar", "Sirajdikhan", "Sreenagar", "Tongibari"
  ],
  Narayanganj: [
    "Araihazar", "Bandar", "Narayanganj Sadar", "Rupganj", "Sonargaon"
  ],
  Narsingdi: [
    "Belabo", "Monohardi", "Narsingdi Sadar", "Palash", "Raipura", "Shibpur"
  ],
  Rajbari: [
    "Baliakandi", "Goalanda", "Kalukhali", "Pangsha", "Rajbari Sadar"
  ],
  Shariatpur: [
    "Bhedarganj", "Damudya", "Gosairhat", "Naria", "Shariatpur Sadar", "Zanjira"
  ],
  Tangail: [
    "Basail", "Bhuapur", "Delduar", "Dhanbari", "Ghatail", "Gopalpur", "Kalihati", "Madhupur", "Mirzapur", "Nagarpur", "Sakhipur", "Tangail Sadar"
  ],

  
  Chattogram: [
    "Anwara", "Banshkhali", "Boalkhali", "Chandanaish", "Fatikchhari", "Hathazari", "Lohagara", "Mirsharai", "Patiya", "Rangunia", "Raozan", "Sandwip", "Satkania", "Sitakunda", "Chattogram Sadar"
  ],
  CoxsBazar: [
    "Chakaria", "Cox’s Bazar Sadar", "Kutubdia", "Maheshkhali", "Pekua", "Ramu", "Teknaf", "Ukhia"
  ],
  Bandarban: [
    "Ali Kadam", "Bandarban Sadar", "Lama", "Naikhongchhari", "Rowangchhari", "Ruma", "Thanchi"
  ],
  Khagrachhari: [
    "Dighinala", "Khagrachhari Sadar", "Lakshmichhari", "Mahalchhari", "Manikchhari", "Matiranga", "Panchhari", "Ramgarh"
  ],
  Rangamati: [
    "Baghaichhari", "Barkal", "Juraichhari", "Kaptai", "Langadu", "Naniarchar", "Rajasthali", "Rangamati Sadar"
  ],
  Feni: [
    "Chhagalnaiya", "Daganbhuiyan", "Feni Sadar", "Parshuram", "Fulgazi", "Sonagazi"
  ],
  Noakhali: [
    "Begumganj", "Chatkhil", "Companiganj", "Hatiya", "Noakhali Sadar", "Senbagh", "Subarnachar"
  ],
  Laxmipur: [
    "Kamalnagar", "Lakshmipur Sadar", "Raipur", "Ramganj", "Ramgati"
  ],


  Khulna: [
    "Batiaghata", "Dacope", "Dighalia", "Dumuria", "Koyra", "Paikgachha", "Phultala", "Rupsa", "Terokhada", "Khulna Sadar"
  ],
  Bagerhat: [
    "Bagerhat Sadar", "Chitalmari", "Fakirhat", "Kachua", "Mollahat", "Mongla", "Morrelganj", "Rampal", "Sarankhola"
  ],
  Satkhira: [
    "Assasuni", "Debhata", "Kalaroa", "Kaliganj", "Satkhira Sadar", "Shyamnagar", "Tala"
  ],
  Jessore: [
    "Abhaynagar", "Bagherpara", "Chaugachha", "Jhikargachha", "Keshabpur", "Jessore Sadar", "Manirampur", "Sharsha"
  ],
  Jhenaidah: [
    "Harinakunda", "Jhenaidah Sadar", "Kaliganj", "Kotchandpur", "Maheshpur", "Shailkupa"
  ],
  Narail: [
    "Kalia", "Lohagara", "Narail Sadar"
  ],
  Magura: [
    "Magura Sadar", "Mohammadpur", "Shalikha", "Sreepur"
  ],
  Chuadanga: [
    "Alamdanga", "Chuadanga Sadar", "Damurhuda", "Jibannagar"
  ],
  Meherpur: [
    "Gangni", "Meherpur Sadar", "Mujibnagar"
  ],

  
  Rajshahi: [
    "Bagha", "Bagmara", "Charghat", "Durgapur", "Godagari", "Mohanpur", "Paba", "Puthia", "Tanore"
  ],
  Naogaon: [
    "Atrai", "Badalgachhi", "Dhamoirhat", "Manda", "Mohadevpur", "Naogaon Sadar", "Niamatpur", "Patnitala", "Porsha", "Raninagar", "Sapahar"
  ],
  Natore: [
    "Bagatipara", "Baraigram", "Gurudaspur", "Lalpur", "Natore Sadar", "Singra"
  ],
  ChapaiNawabganj: [
    "Bholahat", "Gomastapur", "Nachole", "Nawabganj Sadar", "Shibganj"
  ],
  Bogura: [
    "Adamdighi", "Bogura Sadar", "Dhunat", "Dupchanchia", "Gabtali", "Kahaloo", "Nandigram", "Sariakandi", "Shajahanpur", "Sherpur", "Shibganj", "Sonatala"
  ],
  Joypurhat: [
    "Akkelpur", "Joypurhat Sadar", "Kalai", "Khetlal", "Panchbibi"
  ],
  Pabna: [
    "Atgharia", "Bera", "Bhangura", "Chatmohar", "Faridpur", "Ishwardi", "Pabna Sadar", "Santhia", "Sujanagar"
  ],
  Sirajganj: [
    "Belkuchi", "Chauhali", "Kamarkhanda", "Kazipur", "Raiganj", "Shahjadpur", "Sirajganj Sadar", "Tarash", "Ullahpara"
  ],

 
  Sylhet: [
    "Balaganj", "Beanibazar", "Bishwanath", "Companiganj", "Dakshin Surma", "Fenchuganj", "Golapganj", "Gowainghat", "Jaintiapur", "Kanaighat", "Sylhet Sadar", "Zakiganj"
  ],
  Moulvibazar: [
    "Barlekha", "Juri", "Kamalganj", "Kulaura", "Moulvibazar Sadar", "Rajnagar", "Sreemangal"
  ],
  Habiganj: [
    "Ajmiriganj", "Bahubal", "Baniachong", "Chunarughat", "Habiganj Sadar", "Lakhai", "Madhabpur", "Nabiganj"
  ],
  Sunamganj: [
    "Bishwambarpur", "Chhatak", "Derai", "Dharmapasha", "Dowarabazar", "Jagannathpur", "Jamalganj", "Sullah", "Sunamganj Sadar", "Tahirpur"
  ],

  Barishal: [
    "Agailjhara", "Babuganj", "Bakerganj", "Banaripara", "Barishal Sadar", "Gaurnadi", "Hizla", "Mehendiganj", "Muladi", "Wazirpur"
  ],
  Bhola: [
    "Bhola Sadar", "Borhanuddin", "Char Fasson", "Daulatkhan", "Lalmohan", "Manpura", "Tazumuddin"
  ],
  Barguna: [
    "Amtali", "Bamna", "Barguna Sadar", "Betagi", "Patharghata", "Taltali"
  ],
  Patuakhali: [
    "Bauphal", "Dashmina", "Dumki", "Galachipa", "Kalapara", "Mirzaganj", "Patuakhali Sadar", "Rangabali"
  ],
  Jhalokati: [
    "Jhalokati Sadar", "Kathalia", "Nalchity", "Rajapur"
  ],
  Pirojpur: [
    "Bhandaria", "Kawkhali", "Mathbaria", "Nazirpur", "Nesarabad", "Pirojpur Sadar"
  ],

  Rangpur: [
    "Badarganj", "Gangachara", "Kaunia", "Rangpur Sadar", "Mithapukur", "Pirgachha", "Pirganj", "Taraganj"
  ],
  Dinajpur: [
    "Birampur", "Birganj", "Biral", "Bochaganj", "Chirirbandar", "Dinajpur Sadar", "Ghoraghat", "Hakimpur", "Kaharole", "Khansama", "Nawabganj", "Parbatipur"
  ],
  Kurigram: [
    "Bhurungamari", "Chilmari", "Kurigram Sadar", "Nageshwari", "Phulbari", "Rajarhat", "Raomari", "Rowmari", "Ulipur"
  ],
  Gaibandha: [
    "Fulchhari", "Gaibandha Sadar", "Gobindaganj", "Palashbari", "Sadullapur", "Saghata", "Sundarganj"
  ],
  Nilphamari: [
    "Dimla", "Domar", "Jaldhaka", "Kishoreganj", "Nilphamari Sadar", "Saidpur"
  ],
  Lalmonirhat: [
    "Aditmari", "Hatibandha", "Kaliganj", "Lalmonirhat Sadar", "Patgram"
  ],
  Panchagarh: [
    "Atwari", "Boda", "Debiganj", "Panchagarh Sadar", "Tetulia"
  ],
  Thakurgaon: [
    "Baliadangi", "Haripur", "Pirganj", "Ranisankail", "Thakurgaon Sadar"
  ],

  
  Mymensingh: [
    "Bhaluka", "Dhobaura", "Fulbaria", "Gaffargaon", "Gauripur", "Haluaghat", "Ishwarganj", "Muktagachha", "Mymensingh Sadar", "Nandail", "Phulpur", "Trishal"
  ],
  Jamalpur: [
    "Bakshiganj", "Dewanganj", "Islampur", "Jamalpur Sadar", "Madarganj", "Melandaha", "Sarishabari"
  ],
  Netrokona: [
    "Atpara", "Barhatta", "Durgapur", "Khaliajuri", "Kalmakanda", "Kendua", "Madan", "Mohanganj", "Netrokona Sadar", "Purbadhala"
  ],
  Sherpur: [
    "Jhenaigati", "Nakla", "Nalitabari", "Sherpur Sadar", "Sreebardi"
  ]
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "District") {
      setFormData({ ...formData, District: value, Upazila: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Blood request submitted successfully!");
    console.log("Form Data:", formData);
  };

  return (
    <>
      <Navbar />
      <div className="blood-request-page page-container">
        <div className="form-card">
          <h2 className="form-title">Blood Request Form</h2>

          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              name="patientName"
              placeholder="Patient Name"
              value={formData.patientName}
              onChange={handleChange}
              required
              className="form-input"
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
              min="0"
              max="120"
              className="form-input"
            />

            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
              className="form-input"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>

            <input
              type="text"
              name="hospitalName"
              placeholder="Hospital Name"
              value={formData.hospitalName}
              onChange={handleChange}
              required
              className="form-input"
            />

            <select
              name="District"
              value={formData.District}
              onChange={handleChange}
              required
              className="form-input"
            >
              <option value="" disabled>Select District</option>
              {Object.keys(upazilasByDistrict).map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <select
              name="Upazila"
              value={formData.Upazila}
              onChange={handleChange}
              required
              disabled={!formData.District}
              className="form-input"
            >
              <option value="" disabled>Select Upazila</option>
              {formData.District &&
                upazilasByDistrict[formData.District].map((upazila) => (
                  <option key={upazila} value={upazila}>
                    {upazila}
                  </option>
                ))}
            </select>

            <input
              type="tel"
              name="contactNumber"
              placeholder="Contact Number"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className="form-input"
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="form-input"
            />

            <button type="submit" className="submit-btn">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
