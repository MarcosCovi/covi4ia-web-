@echo off
echo ============================================
echo   COVI4IA — Deploy con COVICOIN ALPHA
echo ============================================
cd /d "C:\covi4ia-web\covi4ia-web"
echo.
echo Verificando Vercel CLI...
where vercel >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
  echo Instalando Vercel CLI...
  npm install -g vercel
)
echo.
echo Iniciando deploy a produccion...
vercel --prod
echo.
echo Deploy completado.
pause
