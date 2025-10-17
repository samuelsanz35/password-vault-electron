# Password Vault — Electron (instalador por GitHub Actions)
No necesitas abrir terminal en tu PC. GitHub construye el instalador `.exe` por ti.

## Pasos
1. Crea un repositorio en GitHub y sube **estos archivos** a la raíz del repo.
2. Ve a la pestaña **Actions** y ejecuta **Build Windows Installer** (Run workflow).
3. Al finalizar, en la misma ejecución verás **Artifacts → password-vault-installer**. Descarga el `.exe`.
4. Instala con doble clic. Luego abre la app desde el icono (menú Inicio/Escritorio).

> Esto usa `electron-builder` para crear un instalador NSIS en Windows.
