# Generated by Django 3.2.18 on 2023-04-02 12:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20230402_1715'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.ForeignKey(default=32, on_delete=django.db.models.deletion.CASCADE, to='api.category'),
            preserve_default=False,
        ),
    ]
