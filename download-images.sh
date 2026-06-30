#!/bin/bash
# OPCIONAL: Descarga las 7 imágenes de áreas de práctica al proyecto.
#
# Por defecto el sitio carga las imágenes desde el CDN de Higgsfield.
# Si en algún momento quieres tenerlas alojadas dentro del proyecto
# (más portabilidad, no dependes del CDN externo), ejecuta este script
# y después actualiza lib/content.ts cambiando las URLs por los paths locales.
#
# Uso:
#   chmod +x download-images.sh
#   ./download-images.sh

set -e

DEST="./public/images"
mkdir -p "$DEST"

declare -A IMAGES=(
  ["area-litigio-fiscal.png"]="https://d8j0ntlcm91z4.cloudfront.net/user_3FmeicpEOywjab1mhomZiFuQzoR/hf_20260629_214520_d0f2e336-5399-416f-9971-adc50b88fc6b.png"
  ["area-asesoria-fiscal.png"]="https://d8j0ntlcm91z4.cloudfront.net/user_3FmeicpEOywjab1mhomZiFuQzoR/hf_20260629_214526_057d7482-f14d-49e7-ba21-da9dd6034839.png"
  ["area-corporativo.png"]="https://d8j0ntlcm91z4.cloudfront.net/user_3FmeicpEOywjab1mhomZiFuQzoR/hf_20260629_214531_fe3b0b2d-2de4-4c66-94b7-3f86edd9d517.png"
  ["area-patrimonial.png"]="https://d8j0ntlcm91z4.cloudfront.net/user_3FmeicpEOywjab1mhomZiFuQzoR/hf_20260629_214540_40b53b1e-1ab2-44d0-b469-e90dabe7e3db.png"
  ["area-empresarial.png"]="https://d8j0ntlcm91z4.cloudfront.net/user_3FmeicpEOywjab1mhomZiFuQzoR/hf_20260629_214545_b40ce068-81e7-4336-8e4e-7d61a0b26c08.png"
  ["area-tributaria.png"]="https://d8j0ntlcm91z4.cloudfront.net/user_3FmeicpEOywjab1mhomZiFuQzoR/hf_20260629_214551_50abc6a0-05a6-450d-9e06-99f17949d8dd.png"
  ["area-pymes.png"]="https://d8j0ntlcm91z4.cloudfront.net/user_3FmeicpEOywjab1mhomZiFuQzoR/hf_20260629_214556_52b0b87f-6668-466e-99fc-3844ebe40369.png"
)

echo "Descargando 7 imágenes a $DEST ..."
for name in "${!IMAGES[@]}"; do
  url="${IMAGES[$name]}"
  echo "  → $name"
  curl -sSL "$url" -o "$DEST/$name"
done

echo ""
echo "✓ Descarga completa."
echo ""
echo "Siguiente paso (opcional): edita lib/content.ts y reemplaza cada URL"
echo "  https://d8j0ntlcm91z4.cloudfront.net/...png"
echo "por su path local:"
echo "  /images/area-X.png"
echo ""
echo "Sin esa edición, el sitio seguirá usando las URLs del CDN."
