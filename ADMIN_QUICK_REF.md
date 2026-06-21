# 📚 DEMS Admin Panel - Quick Reference

## 🚀 Quick Start (2 Minutes)

### First Time Setup:
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name: `DEMS Admin Upload`
4. Check: `repo` scope
5. Copy the token
6. Go to: `yoursite.com/admin.html`
7. Login with:
   - Password: `dems2025`
   - Token: Paste your GitHub token

**Done!** ✅

---

## 📤 How to Upload Files

1. Go to `yoursite.com/admin.html`
2. Login with password and GitHub token
3. Fill in:
   - **Title**: "SSC Result 2026"
   - **Category**: Pick one
   - **Description**: (optional)
4. Click file upload area and select your file
5. Click "Upload & Commit"
6. ✅ File is live in 30 seconds!

---

## 📁 File Organization

Files go to: `/public/downloads/`

**Categories:**
- Results
- Academic  
- Exams
- Reports
- Presentations
- Schedules
- Other

---

## ⏱️ Timeline After Upload

| Time | What Happens |
|------|--------------|
| 0s | File uploaded to GitHub |
| 5-10s | GitHub processes the commit |
| 30s | GitHub Pages rebuilds |
| 60s | File appears on downloads page |

---

## 🔑 Important Info

| Item | Details |
|------|---------|
| **Admin URL** | `yoursite.com/admin.html` |
| **Admin Password** | `dems2025` (change in admin.html) |
| **GitHub Token** | Created at github.com/settings/tokens |
| **Max File Size** | 50MB (browser limit) |
| **File Location** | `/public/downloads/` on your repo |

---

## ✅ Checklist

- [ ] Created GitHub Personal Access Token
- [ ] Token has "repo" scope
- [ ] Token copied and saved
- [ ] Accessed admin.html
- [ ] Logged in successfully
- [ ] Uploaded first test file
- [ ] File appears on downloads page

---

## ❌ Troubleshooting

### Token not working?
→ Create new token at: https://github.com/settings/tokens

### File not appearing?
→ Wait 2 minutes and refresh page (Ctrl+F5)

### Can't access admin.html?
→ Check URL: yoursite.com/admin.html

### Need to delete a file?
→ Go to GitHub.com → your repo → public/downloads → delete file

---

## 🔒 Security Tips

✅ **DO:**
- Keep your GitHub token secret
- Change admin password regularly
- Only share password with trusted admins
- Use HTTPS for your site

❌ **DON'T:**
- Share GitHub token publicly
- Use weak passwords
- Store password in unsecured places
- Upload sensitive student data

---

## 📞 Quick Help

**Q: How long until file appears?**
A: 30-120 seconds after upload

**Q: Can I delete files?**
A: Yes, delete from GitHub repo's public/downloads folder

**Q: Can students access the admin panel?**
A: Yes, but they need the password to upload

**Q: What file types are allowed?**
A: All types - PDF, DOCX, XLSX, JPG, etc.

---

**Your Admin Panel:** `admin.html`
**Your Downloads:** `downloads.html`  
**For Help:** See `ADMIN_SETUP.md`

