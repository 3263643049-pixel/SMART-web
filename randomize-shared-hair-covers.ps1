# Put this file in your project root, next to hair-archive.html, hair/, and hair-covers/.
# It collects every image inside hair-covers and its subfolders, shuffles them,
# and renames them into one shared pool:
#   hair-covers/cover-001.png
#   hair-covers/cover-002.png
#   hair-covers/cover-003.png
# Then every hair color page can use the same shared cover pool.

$coverRoot = Join-Path $PSScriptRoot "hair-covers"
$tempRoot = Join-Path $coverRoot "__temp_shared_covers"
$validExtensions = @(".jpg", ".jpeg", ".png", ".webp")

if (!(Test-Path $coverRoot)) {
  Write-Host "Cannot find hair-covers folder. Put this script in your project root."
  exit
}

if (Test-Path $tempRoot) {
  Remove-Item -LiteralPath $tempRoot -Recurse -Force
}

New-Item -ItemType Directory -Path $tempRoot | Out-Null

$files = Get-ChildItem -Path $coverRoot -Recurse -File | Where-Object {
  ($validExtensions -contains $_.Extension.ToLower()) -and ($_.FullName -notlike "$tempRoot*")
}

if ($files.Count -eq 0) {
  Write-Host "No image files found in hair-covers."
  Remove-Item -LiteralPath $tempRoot -Recurse -Force
  exit
}

Write-Host "Found $($files.Count) cover images. Randomizing into one shared pool..."

# Move every image to a temporary folder first, so old names will not conflict.
foreach ($file in $files) {
  $tempName = "__tmp_cover_$([guid]::NewGuid().ToString())$($file.Extension.ToLower())"
  Move-Item -LiteralPath $file.FullName -Destination (Join-Path $tempRoot $tempName)
}

$shuffled = Get-ChildItem -Path $tempRoot -File | Get-Random -Count (Get-ChildItem -Path $tempRoot -File).Count
$i = 1

foreach ($file in $shuffled) {
  $newName = "cover-{0:D3}{1}" -f $i, $file.Extension.ToLower()
  Move-Item -LiteralPath $file.FullName -Destination (Join-Path $coverRoot $newName)
  $i++
}

Remove-Item -LiteralPath $tempRoot -Recurse -Force

Write-Host "Done. All covers are now shared in hair-covers as cover-001, cover-002, cover-003..."
Write-Host "Refresh Live Server to see the result."
