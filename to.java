import androidx.room.Entity;
import androidx.room.PrimaryKey;

@Entity(tableName = "tasks")
public class Task {
    @PrimaryKey(autoGenerate = true)
    public int id;
    public String title;
    public String description;
    public String category;
    public long dueDate;
    public boolean isCompleted;
}
import androidx.room.Dao;
import androidx.room.Delete;
import androidx.room.Insert;
import androidx.room.Query;
import androidx.room.Update;

import java.util.List;

@Dao
public interface TaskDao {
    @Query("SELECT * FROM tasks")
    List<Task> getAllTasks();

    @Insert
    void insert(Task task);

    @Update
    void update(Task task);

    @Delete
    void delete(Task task);
}
import androidx.room.Database;
import androidx.room.RoomDatabase;

@Database(entities = {Task.class}, version = 1)
public abstract class TaskDatabase extends RoomDatabase {
    public abstract TaskDao taskDao();
}
public void addTask(Task task) {
    new Thread(() -> taskDatabase.taskDao().insert(task)).start();
}
public void deleteTask(Task task) {
    new Thread(() -> taskDatabase.taskDao().delete(task)).start();
}
public void updateTask(Task task) {
    new Thread(() -> taskDatabase.taskDao().update(task)).start();
}
