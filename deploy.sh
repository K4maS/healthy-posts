#!/usr/bin/env sh

# Остановить публикацию при ошибках
set -e

# Переход в котолог сборки
cd build

# Инициация репозитория и загрузка кода в gitHub
git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:K4maS/posts-test-mitrasoft.git master:gh-pages

cd -
