# 👕 ReWear – Community Clothing Exchange

ReWear is a sustainable fashion platform that empowers users to exchange their unused clothing through **direct swaps** or a **point-based redemption system**. Our mission is to promote eco-conscious choices, reduce textile waste, and create a vibrant community-driven ecosystem for wearable clothing reuse.

## 🌐 Live Demo

Coming Soon...

---


## ✨ Features

### 👤 User Authentication

* Email/password-based sign-up and login
* User session management via Supabase

### 🏠 Landing Page

* Introduction to the ReWear platform
* CTAs: “Start Swapping”, “Browse Items”, “List an Item”
* Featured items carousel

### 🧑‍💼 User Dashboard

* Profile and points overview
* List of uploaded items
* Ongoing and completed swaps

### 👗 Item Detail Page

* Multiple image gallery
* Full item description
* Uploader profile and options:

  * Swap Request
  * Redeem via Points
* Item availability status

### ➕ Add New Item

* Upload item images
* Input fields: title, description, category, type, size, condition, tags
* Submit listing for review

### 🛡 Admin Panel

* Approve or reject item listings
* Remove spam or inappropriate items
* Lightweight and accessible via secure admin login

---

## 🛠 Tech Stack

| Technology                             | Purpose                                    |
| -------------------------------------- | ------------------------------------------ |
| **Next.js**                            | Frontend and SSR framework                 |
| **Tailwind CSS**                       | Styling and responsive UI                  |
| **MongoDB**                            | NoSQL database for storing items and users |
| **Supabase**                           | Authentication and session handling        |
| **Shadcn/UI**                          | Prebuilt React components and UI           |
| **Lucide Icons**                       | Icons used across the platform             |
| **Cloudinary / ImageKit** *(optional)* | For optimized image uploads                |

---

## 📁 Folder Structure

```
/app
  /api              → API routes for CRUD operations
  /dashboard        → User dashboard and admin panel
  /item             → Item detail and add new item pages
/components         → Reusable UI components
/data               → Static or preprocessed item data
/contexts           → Global context providers (e.g., Auth)
```

---

## 🧪 Installation & Development

```bash
# Clone the repository
git clone https://github.com/your-username/rewear.git
cd rewear

# Install dependencies
npm install

# Add your environment variables
cp .env.example .env.local

# Run the app
npm run dev
```

---

## 🔐 Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
MONGODB_URI=your-mongodb-connection-string
ADMIN_EMAIL=admin@example.com
```

---

## 📦 Use Cases

* **For Users**: Exchange clothes easily without spending money, build eco-conscious habits, and earn points.
* **For NGOs**: Create donation-based listings and reach local communities.
* **For Admins**: Maintain platform hygiene by moderating content and monitoring listings.

---

## 🌱 Future Scope

* ♻️ **Automated Matching System**: Suggest matches based on item size, condition, and tags.
* 📦 **Logistics Integration**: Tie-up with local delivery services for optional doorstep pickup/drop.
* 📊 **Analytics Dashboard**: Impact metrics like carbon offset or clothes saved from landfill.
* 🧵 **Garment Repair/Tailor Network**: Support local artisans by offering alteration services.
* 🌍 **Community Forum**: Tips on sustainable fashion, upcycling, and events.
* 📱 **Mobile App**: PWA or native app for wider reach and convenience.

---

## 🤝 Contributing

Contributions are welcome! Open an issue or submit a pull request.

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).

---

## ✨ Acknowledgements

* Built using [Next.js](https://nextjs.org/)
* Authentication via [Supabase](https://supabase.com/)
* Styled with [Tailwind CSS](https://tailwindcss.com/)
* UI components powered by [shadcn/ui](https://ui.shadcn.com/)
