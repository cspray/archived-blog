<?php

echo "Generating the site...\n";

exec('git checkout source');
exec('git status');
passthru('rbenv exec jekyll build');
