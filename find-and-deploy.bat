@echo off
cd /d "C:\covi4ia-web\covi4ia-web"
set OUT=C:\covi4ia-web\deploy-output.txt

echo === COVI4IA Deploy Diagnostico === > %OUT%
echo.>> %OUT%

echo [PATH actual]>> %OUT%
echo %PATH%>> %OUT%
echo.>> %OUT%

echo [Buscando node/npm/npx/vercel]>> %OUT%
where node >> %OUT% 2>&1
where npm  >> %OUT% 2>&1
where npx  >> %OUT% 2>&1
where vercel >> %OUT% 2>&1
echo.>> %OUT%

REM Try common Node.js locations
set FOUND_NPX=
for %%D in (
    "C:\Program Files\nodejs"
    "C:\Program Files (x86)\nodejs"
    "%APPDATA%\npm"
    "%APPDATA%\nvm\current"
    "%LOCALAPPDATA%\nvm\current"
    "C:\nvm\current"
) do (
    if exist "%%~D\npx.cmd" (
        echo Found npx at: %%~D >> %OUT%
        set "FOUND_NPX=%%~D\npx.cmd"
    )
)

if defined FOUND_NPX (
    echo.>> %OUT%
    echo [Ejecutando vercel via %FOUND_NPX%]>> %OUT%
    "%FOUND_NPX%" vercel --prod --yes >> %OUT% 2>&1
) else (
    echo npx no encontrado en rutas conocidas. Intentando npx directo...>> %OUT%
    npx vercel --prod --yes >> %OUT% 2>&1
)

echo.>> %OUT%
echo === Fin === >> %OUT%
type %OUT%
pause
