# Generated by Django 4.0.2 on 2022-03-16 07:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Mess', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='messOrders',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rollno', models.IntegerField()),
                ('orderedName', models.CharField(max_length=25)),
                ('orderedPrice', models.IntegerField()),
            ],
        ),
    ]
