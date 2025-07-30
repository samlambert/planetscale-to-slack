from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('yourapp', '0001_initial'),
    ]

    operations = [
        migrations.RunSQL(
            "ALTER TABLE `comments` ADD INDEX `idx_comments_on_post_id` (`post_id`);",
            reverse_sql="ALTER TABLE `comments` DROP INDEX `idx_comments_on_post_id`;"
        ),
    ]