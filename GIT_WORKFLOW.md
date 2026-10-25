# Git workflow practice

These commands document the repository workflow used for this activity:

```bash
git status
git add .
git commit -m "Describe the change"
git branch git-demo
git checkout git-demo
# edit a file, then stage and commit it
git checkout main
git merge --no-ff git-demo
git remote add origin https://github.com/USERNAME/midterm_sourcefile_repo.git
git push -u origin main
git clone https://github.com/USERNAME/midterm_sourcefile_repo.git
git pull origin main
```

Replace `USERNAME` with the GitHub account that owns the repository.
