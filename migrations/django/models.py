from django.db import models


class Comment(models.Model):
    post_id = models.IntegerField()
    content = models.TextField()
    author = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'comments'
        indexes = [
            models.Index(fields=['post_id'], name='idx_comments_on_post_id'),
        ]