# COVI4IA — Deploy via Git Push → triggers Vercel GitHub integration
$ErrorActionPreference = "Continue"
$out = "C:\covi4ia-web\deploy-output.txt"
"" | Out-File $out -Encoding UTF8

function Log($msg) { Write-Host $msg; $msg | Out-File $out -Encoding UTF8 -Append }

Log "=== COVI4IA Git Deploy $(Get-Date) ==="

$env:PATH = [Environment]::GetEnvironmentVariable("PATH","Machine") + ";" + `
            [Environment]::GetEnvironmentVariable("PATH","User")

Log "Git version: $(git --version 2>&1)"

Set-Location "C:\covi4ia-web\covi4ia-web"
Log "Working dir: $(Get-Location)"
Log ""

Log "--- git status ---"
$status = git status 2>&1
Log ($status -join "`n")
Log ""

Log "--- git add -A ---"
$add = git add -A 2>&1
Log ($add -join "`n")

Log "--- git commit ---"
$commit = git commit -m "feat: Add COVICOIN ALPHA section - crypto intelligence daily" 2>&1
Log ($commit -join "`n")
Log ""

Log "--- git push origin main ---"
$push = git push origin main 2>&1
Log ($push -join "`n")
Log ""

Log "=== Done. Exit code: $LASTEXITCODE ==="
