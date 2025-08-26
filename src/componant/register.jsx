import { useState } from "react";

const BLOOD_GROUPS = [
  "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"
];

const STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", 
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const ID_TYPES = [
  { value: "aadhaar", label: "Aadhaar" },
  { value: "pan", label: "PAN" },
  { value: "voter", label: "Voter ID" },
  { value: "dl", label: "Driver's Licence" },
];

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    idType: "",
    idNumber: "",
    bloodGroup: "",
    state: "",
    address: "",
    weight: "",
    height: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const e = {};

    if (!form.name.trim()) e.name = "Name is required";

    const ageNum = Number(form.age);
    if (!form.age) e.age = "Age is required";
    else if (Number.isNaN(ageNum) || ageNum < 1 || ageNum > 120) e.age = "Enter a valid age";

    if (!/^\d{10}$/.test(form.mobile)) {
      e.mobile = "Enter 10-digit mobile number";
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(form.email)) {
      e.email = "Enter a valid email";
    }

    if (!form.idType) e.idType = "Select an ID type";

    if (form.idType) {
      if (form.idType === "aadhaar") {
        if (!/^\d{12}$/.test(form.idNumber)) e.idNumber = "Aadhaar must be 12 digits";
      } else if (form.idType === "pan") {
        if (!/^[A-Z]{5}\d{4}[A-Z]$/.test(form.idNumber.toUpperCase())) e.idNumber = "PAN format: ABCDE1234F";
      } else if (form.idType === "voter") {
        if (!/^[A-Z]{3}\d{7}$/.test(form.idNumber.toUpperCase())) e.idNumber = "Voter ID format: AAA1234567";
      } else if (form.idType === "dl") {
        if (!/^[A-Z]{2}\d{2}\s?\d{11,}$/.test(form.idNumber.toUpperCase())) e.idNumber = "Enter a valid DL number";
      }
    }

    if (!form.bloodGroup) e.bloodGroup = "Select blood group";

    if (!form.state) e.state = "Select a state";

    if (!form.address.trim()) e.address = "Address is required";

    const weightNum = Number(form.weight);
    if (!form.weight) e.weight = "Weight is required";
    else if (Number.isNaN(weightNum) || weightNum <= 0) e.weight = "Enter a valid weight";

    const heightNum = Number(form.height);
    if (!form.height) e.height = "Height is required";
    else if (Number.isNaN(heightNum) || heightNum <= 0) e.height = "Enter a valid height";

    if (form.password.length < 6) e.password = "Min 6 characters";

    if (form.confirmPassword !== form.password) e.confirmPassword = "Passwords do not match";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    const payload = { ...form };
    alert("Registered! Check console for payload. This is where you'd send data to your API.");
    console.log("Registration payload:", payload);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-serif text-center">Registration</h1>
        <p className="text-gray-600 text-center mt-2">Fill in your details to register</p>

        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
              placeholder="Full name"
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="22"
            />
            {errors.age && <p className="text-sm text-red-500 mt-1">{errors.age}</p>}
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium mb-1">Mobile No</label>
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={(e) => {
                const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 10);
                setForm((prev) => ({ ...prev, mobile: onlyDigits }));
              }}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="9876543210"
            />
            {errors.mobile && <p className="text-sm text-red-500 mt-1">{errors.mobile}</p>}
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2"
              placeholder="Enter your address"
            />
            {errors.address && <p className="text-sm text-red-500 mt-1">{errors.address}</p>}
          </div>

          {/* Blood Group */}
          <div>
            <label className="block text-sm font-medium mb-1">Blood Group</label>
            <select
              name="bloodGroup"
              value={form.bloodGroup}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled>Select blood group</option>
              {BLOOD_GROUPS.map((bg) => (
                <option key={bg} value={bg}>{bg}</option>
              ))}
            </select>
            {errors.bloodGroup && <p className="text-sm text-red-500 mt-1">{errors.bloodGroup}</p>}
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium mb-1">State</label>
            <select
              name="state"
              value={form.state}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled>Select State</option>
              {STATES.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            {errors.state && <p className="text-sm text-red-500 mt-1">{errors.state}</p>}
          </div>

          {/* Weight */}
          <div>
            <label className="block text-sm font-medium mb-1">Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={form.weight}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="70"
            />
            {errors.weight && <p className="text-sm text-red-500 mt-1">{errors.weight}</p>}
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-medium mb-1">Height (cm)</label>
            <input
              type="number"
              name="height"
              value={form.height}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="175"
            />
            {errors.height && <p className="text-sm text-red-500 mt-1">{errors.height}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={showPwd ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••"
            />
            <button
              type="button"
              onClick={() => setShowPwd((s) => !s)}
              className="text-xs text-indigo-600 mt-1"
            >
              {showPwd ? "Hide" : "Show"}
            </button>
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              type={showConfirmPwd ? "text" : "password"}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPwd((s) => !s)}
              className="text-xs text-indigo-600 mt-1"
            >
              {showConfirmPwd ? "Hide" : "Show"}
            </button>
            {errors.confirmPassword && (
              <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 space-y-3">
            <button
              type="submit"
              className="w-full rounded-lg bg-red-500 text-white py-3 font-medium hover:bg-rose-400 transition"
            >
              Register
            </button>

            <button
              type="button"
              onClick={() => window.location.href = "/login"}
              className="w-full rounded-lg bg-orange-400 text-white py-3 font-medium hover:bg-orange-300 transition"
            >
              Already have an account? Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
