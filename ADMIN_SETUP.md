# 🎓 DEMS Admin Upload Panel - Setup Guide

Welcome! This guide will help you set up the admin upload system for your school website.

---

## 📋 What You'll Get

✅ **Admin Upload Panel** (`/admin.html`)
- Beautiful, password-protected form
- Upload files directly to your GitHub repo
- Files appear on downloads page automatically
- Real-time file statistics

✅ **Automatic GitHub Commits**
- Files are committed immediately
- GitHub Pages auto-rebuilds your site
- Students see new files within seconds

✅ **Smart Downloads Page** 
- Auto-detects new files in `/public/downloads` folder
- Search, filter by category
- View and download options for all students

---

## 🔧 Step 1: Create a GitHub Personal Access Token

This allows the admin form to commit files to your repo automatically.

### Instructions:

1. **Go to GitHub Settings:**
   - Visit: https://github.com/settings/tokens
   - Click **"Generate new token"** → **"Generate new token (classic)"**

2. **Configure the Token:**
   - **Token name:** `DEMS Admin Upload`
   - **Expiration:** 90 days (or Custom)
   - **Select scopes:** ✓ Check `repo` (full control of private repositories)

3. **Create & Copy:**
   - Click **"Generate token"**
   - 🔑 **IMPORTANT:** Copy the token immediately (you won't see it again!)
   - Store it somewhere safe

4. **Keep this token ready** for the next step!

> **Security Note:** This token is stored only in your browser's local storage. Never share it publicly!

---

## 🚀 Step 2: Access the Admin Panel

1. **Go to your admin panel:**
   ```
   https://yourdomain.com/admin.html
   ```
   (Or locally: `file:///path/to/schoolsite-99advtnew/admin.html`)

2. **Login with:**
   - **Password:** `dems2025` (you can change this in `admin.html` line 242)
   - **GitHub Token:** Paste the token you created above

3. ✅ **You're in!** The admin panel is now ready to use.

---

## 📤 Step 3: Upload Your First File

### In the Admin Panel:

1. **Enter File Details:**
   - **Title:** "Exam Schedule 2026-27"
   - **Category:** Select appropriate category
   - **Description:** (Optional) "Complete exam schedule for all classes"

2. **Upload File:**
   - Click the file upload area or drag & drop
   - Select file from your computer

3. **Click "Upload & Commit"**
   - ✅ File is committed to GitHub
   - ✅ Site automatically rebuilds
   - ✅ File appears on downloads page in ~30 seconds

---

## 📱 Available Categories

When uploading, choose from:
- **Results** - Test/exam results
- **Academic** - Calendars, policies, prospectus
- **Exams** - Exam schedules and dates
- **Reports** - Annual reports, academic reports
- **Presentations** - PPT, slideshows
- **Schedules** - Class schedules, timetables
- **Other** - Miscellaneous files

---

## 🎯 How It Works (Behind the Scenes)

```
Admin Form Upload
        ↓
GitHub API Commit
        ↓
File saved to /public/downloads/
        ↓
GitHub Actions Workflow
        ↓
GitHub Pages Auto-rebuild
        ↓
Students see new file on downloads page!
```

---

## 📚 File Upload Tips

### Maximum File Size
- **Browser limit:** 50MB per file
- **GitHub limit:** 100MB per file
- For larger files, contact support

### Supported File Types
- 📄 Documents: PDF, DOCX, DOC, XLS, XLSX
- 🖼️ Images: JPG, PNG, GIF, WEBP
- 🎬 Presentations: PPTX, PPT
- 📋 Others: HTML, TXT, etc.

### Naming Convention (Recommended)
Use clear, descriptive filenames:
- ✅ `exam-schedule-2026-27.pdf`
- ✅ `ssc-result-june-2026.xlsx`
- ❌ `file1.pdf` (too vague)

---

## 🔐 Security & Privacy

### Admin Password
- Located in `admin.html` (line 242)
- Change it to something only admins know
- Default: `dems2025`

### GitHub Token
- Only stored in your browser's local storage
- Not sent to any external server
- Can be revoked anytime at https://github.com/settings/tokens

### File Access
- **Students:** Can view and download all files freely
- **Files:** Public GitHub repo, accessible to anyone
- **Upload:** Admin-only (password protected)

---

## ❓ Frequently Asked Questions

### Q: Why do I need a GitHub token?
**A:** This allows the form to commit files directly to your GitHub repository without a backend server. Since you're using GitHub Pages (static hosting), this is the simplest approach.

### Q: Where are the uploaded files stored?
**A:** In the `/public/downloads` folder of your GitHub repository.

### Q: How long does it take for files to appear?
**A:** Usually 30 seconds to 2 minutes as GitHub rebuilds your site.

### Q: Can I edit file titles after uploading?
**A:** Yes, you can edit the `downloads.html` file to change titles, descriptions, or categories.

### Q: What if I accidentally upload a wrong file?
**A:** Go to GitHub.com → your repo → public/downloads → delete the file → commit. It will disappear from your site within 2 minutes.

### Q: Can students see who uploaded files?
**A:** No, files are public but upload details are only visible to admins.

---

## 🛠️ Customize the Admin Panel

### Change the Admin Password

1. Open `admin.html` in a code editor
2. Find line 242:
   ```javascript
   const ADMIN_PASSWORD = 'dems2025';
   ```
3. Change to your secure password:
   ```javascript
   const ADMIN_PASSWORD = 'your-new-password';
   ```
4. Save and commit to GitHub

### Change GitHub Repo Details

If your repo name or username changes, update these lines in `admin.html`:

```javascript
const GITHUB_OWNER = 'your-github-username';
const GITHUB_REPO = 'your-repo-name';
const GITHUB_BRANCH = 'main'; // or 'master'
```

---

## 📝 Editing Download Categories

Students see files organized by category on the downloads page. To add more categories:

1. Open `admin.html`
2. Find the category dropdown (around line 159)
3. Add new options:
   ```html
   <option value="Your Category">Your Category</option>
   ```

---

## 🐛 Troubleshooting

### "Invalid token" error?
- Your GitHub token is incorrect or expired
- Create a new token: https://github.com/settings/tokens
- Make sure you have "repo" scope selected

### File uploaded but not appearing?
- Wait 2 minutes for GitHub Pages to rebuild
- Refresh the downloads page with Ctrl+F5 (hard refresh)
- Check your repo's "public/downloads" folder on GitHub.com

### Admin form not working?
- Check browser console (F12 → Console tab) for errors
- Verify GitHub token is valid and has "repo" scope
- Clear browser cache and try again

### GitHub API rate limit exceeded?
- You're making too many requests
- Wait 1 hour before trying again
- Consider using a GitHub App token for higher limits

---

## 🚀 Next Steps

1. ✅ Create GitHub Personal Access Token
2. ✅ Visit `/admin.html` and login
3. ✅ Upload your first test file
4. ✅ Share admin password with other admins (securely!)
5. ✅ Tell students about the downloads page

---

## 📞 Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Verify your GitHub token and password
3. Review browser console for error messages (F12)
4. Check GitHub repo's "Actions" tab for workflow status

---

## 🎉 You're All Set!

Your admin upload system is now ready. Students can download files freely, and you can upload new resources in seconds!

**Happy uploading! 🚀**

---

*Last Updated: June 22, 2026*
*For DEMS - Dahanukar English Medium School*
