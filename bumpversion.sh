#!/bin/bash
set -e
r=git$(git describe --always)
echo -n $r > _includes/version
git add _includes/version
