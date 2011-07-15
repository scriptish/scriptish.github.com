#!/bin/bash
for x in *.png; do
  y=thumbs/$(basename $x)
  convert $x -resize 200x180 -filter lanczos $y
done;
