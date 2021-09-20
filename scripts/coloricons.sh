#! /bin/bash

ICONS=../public/icons
STRING="fill"

for file in ${ICONS}/*;do
  if ! grep -q $STRING "${file}";then
    echo "adding collor on ${file}"

    sed -i -e 's/<svg /<svg fill=\"white\" /g' ${file}
  fi
done