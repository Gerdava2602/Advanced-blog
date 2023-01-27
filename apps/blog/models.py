from django.db import models
import uuid

# Create your models here.
def blog_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return 'blog/{0}/{1}'.format(instance.title, filename)

class Post(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

    blog_uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=250)
    slug = models.SlugField(max_length=250)
    thumbnail = models.ImageField(upload_to=blog_directory_path, blank=True)
    video = models.FileField(upload_to=blog_directory_path, blank=True)
    description = models.TextField()
    excerpt = models.CharField(max_length=100)
    
    # author = models.CharField(max_length=100)
    # category = models.ForeignKey(BlogCategory, on_delete=models.PROTECT)