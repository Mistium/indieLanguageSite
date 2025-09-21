# 🌐 Add Your Language to [indielangs.org](https://indielangs.org)

Hey there, indie language creator! 👋  
Thanks for choosing to showcase your language on **indielangs.org** — the community hub for experimental, chaotic, powerful, and fun programming languages.

Follow this quick guide to get your language listed! 💻🚀

---

## 🛠️ Step 1: Fork the Repository

Click the `Fork` button at the top right of this repo and clone it locally:

```bash
git clone https://github.com/IndieLangsAssociation/indieLanguageSite
cd indieLanguageSite
````

---

## 📦 Step 2: Add Your Language Metadata

Open the file:

```
src/data/languagesData.ts
```

Then, add a new object to the exported array like this:

```ts
{
  name: "ExampleLang", // Display name (required)
  slug: "examplelang", // URL-friendly identifier, lowercase & no spaces (required)
  tagline: "this is an example", // Short and catchy (required)
  logo: "/logos/examplelang.png", // Path to logo file (required)
  description: "this is an example to show how to add a language to indielangs.org", // Full description (required)
  website: "https://example.com", // Optional but recommended
  discord: "https://discord.gg/example", // Optional
  github: "https://github.com/example/examplelang", // Optional
},
```

✅ **Required Fields:** `name`, `slug`, `tagline`, `logo`, `description`
ℹ️ *Optional Fields:* `website`, `discord`, `github`

---

## 🖼️ Step 3: Add Your Logo

Place your logo in:

```
public/logos/
```

Supported formats: `.webp` (preferred), `.png`, `.jpg`, etc.
🖼️ **Tip:** Use `.webp` for smaller file size and better SEO!

---

## 📤 Step 4: Submit a Pull Request

Once you've added your language, create a Pull Request (PR) to submit your changes.

We’ll review it and either approve ✅ or request changes 🔁 with helpful feedback.

---

## 💬 Questions?

Feel free to [open an issue](https://github.com/IndieLangsAssociation/indieLanguageSite) or join our [Discord](https://discord.gg/UvMZrQaMZ2) if you’re unsure about anything!

---

🎉 That’s it — welcome to the indie language crew!
