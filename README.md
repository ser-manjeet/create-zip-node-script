# 📦 Project Archiver

This script creates a ZIP archive of a project directory, including selected files and folders commonly used in PHP-based or WordPress plugin/theme projects.

## 🛠️ Features

* Uses [`adm-zip`](https://www.npmjs.com/package/adm-zip) to generate a `.zip` archive.
* Uses [`fast-glob`](https://www.npmjs.com/package/fast-glob) for flexible file pattern matching.
* Automatically names the archive after the current working directory.
* Includes only the necessary files/folders (like `build`, `assets`, `includes`, and specific PHP files).

## 📂 Files Included

The script includes the following (if found):

```text
assets/dist/**
assets/images/**
build/**
includes/**
include/**
languages/**
public/**
{project-name}.php
functions.php
uninstall.php
changelog.*
license.*
readme.*
```

## 📄 Usage

1. **Install dependencies:**

```bash
npm install adm-zip fast-glob
```

2. **Place this script in your project root directory.**

3. **Run the script:**

```bash
node archive.js
```

> Replace `archive.js` with the actual filename of the script.

4. The script will generate a ZIP file named after your project folder (e.g., `my-plugin.zip`).

## 🧰 Example Output

```bash
Creating archive for `my-plugin` project... 🎁

  Adding `assets/dist/index.js`.
  Adding `includes/class-my-plugin.php`.
  Adding `my-plugin.php`.
  ...

Done. `my-plugin.zip` is ready! 🎉
```

## 📝 Notes

* You can customize the list of files/folders to include by editing the `glob()` patterns in the script.
* The script is case-insensitive when matching file names (e.g., it matches `README.md`, `readme.txt`, etc.).

---
