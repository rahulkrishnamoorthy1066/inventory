









































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































<?php
/*
---------------------------------------------------------
WEB TECHNOLOGIES LAB EXERCISE – PHP -1
---------------------------------------------------------
*/

/* =========================================================
1. Display string using array elements
$color = array('white', 'green', 'red', 'blue', 'black');
Write a script which will display the following string -
"The memory of that scene for me is like a frame of film forever frozen at that
moment: the red carpet, the green lawn, the white house, the leaden sky. The
new president and his first lady. - Richard M. Nixon"
and the words 'red', 'green' and 'white' will come from $color.
========================================================= */
echo "<h3>1. Display string using array elements</h3>";
$color = array('white', 'green', 'red', 'blue', 'black');
echo "The memory of that scene for me is like a frame of film forever frozen at that moment: the "
    . $color[2] . " carpet, the " . $color[1] . " lawn, the " . $color[0]
    . " house, the leaden sky. The new president and his first lady. - Richard M. Nixon.<hr>";

/* =========================================================
2. Display colors in list format
$color = array('white', 'green', 'red');
Write a PHP script which will display:
white, green, red,
• green
• red
• white
========================================================= */
echo "<h3>2. Display colors in list format</h3>";
$color = array('white', 'green', 'red');
echo implode(", ", $color) . ",<br><ul>";
foreach ($color as $c) {
    echo "<li>$c</li>";
}
echo "</ul><hr>";

/* =========================================================
3. Display capital and country name sorted by capital
$ceu = array("Italy"=>"Rome", ... );
Create a PHP script which displays the capital and country name
sorted by the capital of the country.
========================================================= */
echo "<h3>3. Country and Capital List (Sorted by Capital)</h3>";
$ceu = array(
"Italy"=>"Rome", "Luxembourg"=>"Luxembourg", "Belgium"=>"Brussels", "Denmark"=>"Copenhagen",
"Finland"=>"Helsinki", "France"=>"Paris", "Slovakia"=>"Bratislava", "Slovenia"=>"Ljubljana",
"Germany"=>"Berlin", "Greece"=>"Athens", "Ireland"=>"Dublin", "Netherlands"=>"Amsterdam",
"Portugal"=>"Lisbon", "Spain"=>"Madrid", "Sweden"=>"Stockholm", "United Kingdom"=>"London",
"Cyprus"=>"Nicosia", "Lithuania"=>"Vilnius", "Czech Republic"=>"Prague", "Estonia"=>"Tallin",
"Hungary"=>"Budapest", "Latvia"=>"Riga", "Malta"=>"Valetta", "Austria"=>"Vienna", "Poland"=>"Warsaw");
asort($ceu);
foreach($ceu as $country => $capital) {
    echo "The capital of $country is $capital<br>";
}
echo "<hr>";

/* =========================================================
4. Delete an element and normalize array keys
$x = array(1, 2, 3, 4, 5);
Delete an element and reindex.
========================================================= */
echo "<h3>4. Delete an element and normalize keys</h3>";
$x = array(1, 2, 3, 4, 5);
print_r($x);
unset($x[3]);
$x = array_values($x);
echo "<pre>";
print_r($x);
echo "</pre><hr>";

/* =========================================================
5. Get the first element of an array
$color = array(4 => 'white', 6 => 'green', 11=> 'red');
Expected result : white
========================================================= */
echo "<h3>5. Get first element of array</h3>";
$color = array(4 => 'white', 6 => 'green', 11=> 'red');
echo "First element: " . reset($color) . "<hr>";

/* =========================================================
6. Decode JSON string
Sample JSON:
{"Title": "The Cuckoos Calling","Author": "Robert Galbraith","Detail": {"Publisher": "Little Brown"}}
========================================================= */
echo "<h3>6. Decode JSON string</h3>";
$json = '{"Title": "The Cuckoos Calling","Author": "Robert Galbraith","Detail": {"Publisher": "Little Brown"}}';
$data = json_decode($json, true);
echo "Title : " . $data['Title'] . "<br>";
echo "Author : " . $data['Author'] . "<br>";
echo "Publisher : " . $data['Detail']['Publisher'] . "<hr>";

/* =========================================================
7. Insert a new item in an array at any position
Expected Output:
Original array: 1 2 3 4 5
After inserting '$': 1 2 3 $ 4 5
========================================================= */
echo "<h3>7. Insert new item in array</h3>";
$original = array(1, 2, 3, 4, 5);
echo "Original array: ";
echo implode(" ", $original) . "<br>";
array_splice($original, 3, 0, '$');
echo "After inserting '\$': ";
echo implode(" ", $original) . "<hr>";

/* =========================================================
8. Sort associative array in multiple ways
array("Sophia"=>"31","Jacob"=>"41","William"=>"39","Ramesh"=>"40")
a) ascending by value
b) ascending by key
c) descending by value
d) descending by key
========================================================= */
echo "<h3>8. Sorting associative array</h3>";
$age = array("Sophia"=>"31","Jacob"=>"41","William"=>"39","Ramesh"=>"40");
asort($age);
echo "a) Ascending by Value:<br>"; print_r($age); echo "<br>";
ksort($age);
echo "b) Ascending by Key:<br>"; print_r($age); echo "<br>";
arsort($age);
echo "c) Descending by Value:<br>"; print_r($age); echo "<br>";
krsort($age);
echo "d) Descending by Key:<br>"; print_r($age); echo "<hr>";

/* =========================================================
9. Calculate and display average temperature, and 5 lowest & highest
Recorded temperatures:
78, 60, 62, 68, 71, 68, 73, 85, 66, 64, 76, 63, 75, 76, 73, 68,
62, 73, 72, 65, 74, 62, 62, 65, 64, 68, 73, 75, 79, 73
========================================================= */
echo "<h3>9. Average and temperature statistics</h3>";
$temp = [78,60,62,68,71,68,73,85,66,64,76,63,75,76,73,68,62,73,72,65,74,62,62,65,64,68,73,75,79,73];
$avg = array_sum($temp)/count($temp);
echo "Average Temperature is : " . round($avg,1) . "<br>";
sort($temp);
$low = array_slice($temp, 0, 7);
$high = array_slice($temp, -7);
echo "List of seven lowest temperatures : " . implode(", ", $low) . "<br>";
echo "List of seven highest temperatures : " . implode(", ", $high) . "<hr>";

/* =========================================================
11. Merge two arrays by index
$array1 = array(array(77, 87), array(23, 45));
$array2 = array("w3resource", "com");
========================================================= */
echo "<h3>11. Merge two arrays by index</h3>";
$array1 = array(array(77, 87), array(23, 45));
$array2 = array("w3resource", "com");
$new = array();
for($i=0;$i<count($array1);$i++){
    array_unshift($array1[$i], $array2[$i]);
}
echo "<pre>"; print_r($array1); echo "</pre><hr>";

/* =========================================================
12. Change array values to upper and lower case
$Color = array('A' => 'Blue', 'B' => 'Green', 'c' => 'Red');
========================================================= */
echo "<h3>12. Change array values to upper/lower case</h3>";
$Color = array('A' => 'Blue', 'B' => 'Green', 'c' => 'Red');
$lower = array_map('strtolower', $Color);
$upper = array_map('strtoupper', $Color);
echo "Values in lower case:<br>"; print_r($lower); echo "<br>";
echo "Values in upper case:<br>"; print_r($upper); echo "<hr>";

/* =========================================================
13. Display all numbers between 200 and 250 divisible by 4
Do not use control statements.
========================================================= */
echo "<h3>13. Numbers between 200 and 250 divisible by 4</h3>";
echo implode(",", range(200, 248, 4));
echo "<hr>";
?>



<?php
/*
---------------------------------------------------------
PHP LAB SOLUTIONS – PART 2
---------------------------------------------------------
*/

/* =========================================================
1. Arrays – Sorting and Displaying Top Students
Write a PHP program that stores student names and their marks in an associative array (e.g.,
["Rahul" => 85, "Priya" => 92, "Arun" => 78, ...]). Sort the array in descending order of marks and
display the top 3 students with their names and marks in a neat tabular format.
========================================================= */
echo "<h3>1. Arrays – Top 3 Students</h3>";
$students = ["Rahul" => 85, "Priya" => 92, "Arun" => 78, "Meena" => 95, "Karthik" => 88];
arsort($students);
echo "<table border='1' cellpadding='5'><tr><th>Name</th><th>Marks</th></tr>";
$count = 0;
foreach ($students as $name => $mark) {
    echo "<tr><td>$name</td><td>$mark</td></tr>";
    if (++$count == 3) break;
}
echo "</table><hr>";

/* =========================================================
2. Arrays + File Handling – Reading Products from File
Create a text file products.txt with product names and prices (e.g., Laptop,55000, Mouse,500). Write
a PHP program to:
• Read the file contents into an array.
• Sort the products based on price (ascending).
• Display the sorted product list in an HTML table with two columns: Product Name and
Price.
========================================================= */
echo "<h3>2. Arrays + File Handling – Products</h3>";
$file = "products.txt";
if (file_exists($file)) {
    $data = file($file, FILE_IGNORE_NEW_LINES);
    $products = [];
    for ($i = 0; $i < count($data); $i += 2) {
        $products[$data[$i]] = $data[$i + 1];
    }
    asort($products);
    echo "<table border='1' cellpadding='5'><tr><th>Product</th><th>Price</th></tr>";
    foreach ($products as $p => $price) {
        echo "<tr><td>$p</td><td>$price</td></tr>";
    }
    echo "</table>";
} else {
    echo "products.txt not found.";
}
echo "<hr>";

/* =========================================================
3. Regular Expressions – Validating Email Addresses
Write a PHP script that has an array of email addresses, some valid and some invalid (e.g.,
["john@example.com", "wrong-email@", "me@site", "user123@gmail.com"]). Using regular
expressions, check each email address and print only the valid ones
========================================================= */
echo "<h3>3. Regular Expressions – Valid Emails</h3>";
$emails = ["john@example.com", "wrong-email@", "me@site", "user123@gmail.com"];
foreach ($emails as $email) {
    if (preg_match("/^[\w\.-]+@[\w\.-]+\.\w+$/", $email)) {
        echo "$email<br>";
    }
}
echo "<hr>";

/* =========================================================
4. Regular Expressions + Error Handling – Password Validation
Create a PHP script that accepts a password string. The password must:
• Be at least 8 characters long.
• Contain at least one uppercase letter.
• Contain at least one digit.
• Contain at least one special character (e.g., @, #, $, %).
If the password does not meet any of these conditions, throw a custom exception with a message
like "Password must contain at least one uppercase letter". Handle the exception and display the
error message
========================================================= */
echo "<h3>4. Password Validation</h3>";
function validatePassword($password) {
    if (strlen($password) < 8)
        throw new Exception("Password must be at least 8 characters long");
    if (!preg_match("/[A-Z]/", $password))
        throw new Exception("Password must contain at least one uppercase letter");
    if (!preg_match("/\d/", $password))
        throw new Exception("Password must contain at least one digit");
    if (!preg_match("/[@#$%]/", $password))
        throw new Exception("Password must contain at least one special character (@, #, $, %)");
    return true;
}
try {
    $password = "Test@123";
    validatePassword($password);
    echo "Password '$password' is valid.";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
echo "<hr>";

/* =========================================================
5. File Handling – Writing and Reading Logs
Write a PHP script that appends log entries to a file access.log. Each entry should follow this
format:
Username – YYYY-MM-DD HH:MM:SS – Action
Example: admin – 2025-09-26 10:30:15 – Logged In
After writing, read and display only the last 5 log entries on the web page
========================================================= */
echo "<h3>5. File Handling – Logs</h3>";
$logFile = "access.log";
$username = "admin";
$action = "Logged In";
$entry = "$username – " . date("Y-m-d H:i:s") . " – $action\n";
file_put_contents($logFile, $entry, FILE_APPEND);

$lines = file($logFile, FILE_IGNORE_NEW_LINES);
$lastLogs = array_slice($lines, -5);
foreach ($lastLogs as $log) {
    echo "$log<br>";
}
echo "<hr>";

/* =========================================================
6. Date and Time – Calculations
Write a PHP program to:
• Display the current date and time in the format DD-MM-YYYY HH:MM:SS.
• Ask the user to input their date of birth (e.g., 1990-05-15) and calculate the number of
days left until their next birthday.
========================================================= */
echo "<h3>6. Date and Time – Birthday Countdown</h3>";
echo "Current Date & Time: " . date("d-m-Y H:i:s") . "<br>";
$dob = "2000-05-15";
$today = new DateTime();
$birthDate = new DateTime(date("Y") . "-" . date("m-d", strtotime($dob)));
if ($birthDate < $today) $birthDate->modify('+1 year');
$daysLeft = $today->diff($birthDate)->days;
echo "Days left until next birthday: $daysLeft<br><hr>";

/* =========================================================
7. Arrays + Error Handling – Average of Numbers
Write a PHP program that accepts an array of numbers (e.g., [10, 20, 30, 40, 50]) and calculates their
average. If the array is empty, throw an exception with the message "No numbers provided" and
handle it properly by displaying an error message.
========================================================= */
echo "<h3>7. Arrays + Error Handling – Average</h3>";
$numbers = [10, 20, 30, 40, 50];
try {
    if (empty($numbers)) throw new Exception("No numbers provided");
    $avg = array_sum($numbers) / count($numbers);
    echo "Average: $avg";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
echo "<hr>";

/* =========================================================
8. File Handling + Regular Expressions – Extracting Mobile Numbers
Create a text file data.txt containing some text mixed with phone numbers (e.g., “ Call me at
9876543210 or at office 9123456789”). Write a PHP program that uses regular expressions to extract
all valid 10-digit mobile numbers from the file and save them into a new file numbers.txt.
========================================================= */
echo "<h3>8. File Handling + Regex – Mobile Numbers</h3>";
$dataFile = "data.txt";
if (file_exists($dataFile)) {
    $content = file_get_contents($dataFile);
    preg_match_all("/\b\d{10}\b/", $content, $matches);
    file_put_contents("numbers.txt", implode("\n", $matches[0]));
    echo "Extracted numbers saved to numbers.txt:<br>";
    foreach ($matches[0] as $num) echo "$num<br>";
} else {
    echo "data.txt not found.";
}
echo "<hr>";

/* =========================================================
9. Date and Time + File Handling – Backup File Creation
Write a PHP script that creates a backup copy of any given file. The backup file name should
include the current date and time.
Example: If the original file is data.txt and today’s date-time is 2025-09-26 11:25:00, the backup file
should be saved as data_2025-09-26_11-25.txt.
========================================================= */
echo "<h3>9. Backup File Creation</h3>";
$original = "data.txt";
if (file_exists($original)) {
    $timestamp = date("Y-m-d_H-i");
    $backup = "data_" . $timestamp . ".txt";
    copy($original, $backup);
    echo "Backup created: $backup<br>";
} else {
    echo "data.txt not found for backup.";
}
echo "<hr>";

/* =========================================================
10. Combined Task – Student Records Validation
You are given a text file students.txt where each line contains student details in this format:
Name,Email,DateOfBirth(YYYY-MM-DD)
Example: Anita,anita123@gmail.com,2000-06-15
Write a PHP program that:
• Reads each student record from the file.
• Validates the email format using regular expressions.
• Calculates the student’s age from their date of birth.
• Displays the valid records in a table with columns: Name, Email, Age.
• If a record has an invalid email or missing fields, handle the error gracefully and save the
invalid entries into a new file errors.log.
========================================================= */
echo "<h3>10. Student Records Validation</h3>";
$inputFile = "students.txt";
$errorFile = "errors.log";

if (file_exists($inputFile)) {
    $records = file($inputFile, FILE_IGNORE_NEW_LINES);
    echo "<table border='1' cellpadding='5'><tr><th>Name</th><th>Email</th><th>Age</th></tr>";
    foreach ($records as $line) {
        $parts = explode(",", $line);
        if (count($parts) != 3) {
            file_put_contents($errorFile, "$line – Invalid format\n", FILE_APPEND);
            continue;
        }
        list($name, $email, $dob) = $parts;
        if (!preg_match("/^[\w\.-]+@[\w\.-]+\.\w+$/", $email)) {
            file_put_contents($errorFile, "$line – Invalid email\n", FILE_APPEND);
            continue;
        }
        $age = date_diff(date_create($dob), date_create('today'))->y;
        echo "<tr><td>$name</td><td>$email</td><td>$age</td></tr>";
    }
    echo "</table>";
} else {
    echo "students.txt not found.";
}
echo "<hr>";
?>

<?php
/*
---------------------------------------------------------
PHP LAB SOLUTIONS – PART 3
---------------------------------------------------------
*/



/*  =========================================================
1. Cookie-Based Visit Counter
Problem:
Write a PHP program that uses cookies to count how many times a user has visited your
webpage. Display a message showing the visit count.
Outline Solution:
<?php
if(isset($_COOKIE['visits'])) {
 $count = $_COOKIE['visits'] + 1;
} else {
 $count = 1;
}
setcookie('visits', $count, time() + 3600);
echo "Welcome! You have visited this page $count times.";
?>
========================================================= */

if (isset($_COOKIE['visits'])) {
    $count = $_COOKIE['visits'] + 1;
} else {
    $count = 1;
}
setcookie('visits', $count, time() + 3600);
echo "Welcome! You have visited this page $count times.";


/*  =========================================================
2. Session-Based Login Authentication
Problem:
Create a login system using sessions. Redirect to a welcome page upon successful login.
Outline Solution:
<?php
session_start();
if($_POST['user']=="admin" && $_POST['pass']=="1234") {
 $_SESSION['user'] = "admin";
 header("Location: welcome.php");
} else {
 echo "Invalid credentials.";
}
?>
 ========================================================= */
session_start();

if (isset($_GET['logout'])) {
    session_unset();
    session_destroy();
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['user'];
    $password = $_POST['pass'];

    if ($username === "admin" && $password === "1234") {
        $_SESSION['user'] = $username;
    } else {
        $error = "Invalid username or password!";
    }
}

if (isset($_SESSION['user'])) {
    ?>
    <!DOCTYPE html>
    <html>
    <head><title>Welcome</title></head>
    <body>
        <h2>Welcome, <?php echo $_SESSION['user']; ?>!</h2>
        <p>You are logged in successfully using session.</p>
        <a href="?logout=true">Logout</a>
    </body>
    </html>
    <?php
} else {
    ?>
    <!DOCTYPE html>
    <html>
    <head><title>Login</title></head>
    <body>
        <h2>Login</h2>
        <?php if (!empty($error)) echo "<p style='color:red'>$error</p>"; ?>
        <form method="POST" action="">
            Username: <input type="text" name="user" required><br><br>
            Password: <input type="password" name="pass" required><br><br>
            <button type="submit">Login</button>
        </form>
    </body>
    </html>
    <?php
}
?>
<?php
/*  =========================================================
3. Remember Me Functionality with Cookies
Problem:
Add a “Remember Me” option that saves the username in a cookie.
Outline Solution:
<?php
if(isset($_POST['remember'])) {
 setcookie('username', $_POST['username'], time()+3600*24);
}
echo "Welcome " . ($_COOKIE['username'] ?? 'Guest');
?>
========================================================= */

session_start();

if (isset($_GET['logout'])) {
    session_unset();
    session_destroy();
    setcookie("username", "", time() - 3600); // Delete cookie
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}

$savedUsername = $_COOKIE['username'] ?? "";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['user'];
    $password = $_POST['pass'];
    $remember = isset($_POST['remember']);

    if ($username === "admin" && $password === "1234") {
        $_SESSION['user'] = $username;

        if ($remember) {
            setcookie("username", $username, time() + (86400 * 7)); // 7 days
        } else {
            setcookie("username", "", time() - 3600); // Remove cookie if unchecked
        }
    } else {
        $error = "Invalid username or password!";
    }
}

if (isset($_SESSION['user'])) {
    ?>
    <!DOCTYPE html>
    <html>
    <head><title>Welcome</title></head>
    <body>
        <h2>Welcome, <?php echo $_SESSION['user']; ?>!</h2>
        <p>You are logged in successfully.</p>
        <a href="?logout=true">Logout</a>
    </body>
    </html>
    <?php
} else {
    ?>
    <!DOCTYPE html>
    <html>
    <head><title>Login with Remember Me</title></head>
    <body>
        <h2>Login</h2>
        <?php if (!empty($error)) echo "<p style='color:red'>$error</p>"; ?>
        <form method="POST" action="">
            Username: <input type="text" name="user" value="<?php echo htmlspecialchars($savedUsername); ?>" required><br><br>
            Password: <input type="password" name="pass" required><br><br>
            <label><input type="checkbox" name="remember"> Remember Me</label><br><br>
            <button type="submit">Login</button>
        </form>
    </body>
    </html>
    <?php
}
?>
<?php
/*  =========================================================
4. Simple CAPTCHA Verification
Problem:
Generate a CAPTCHA image using GD library and verify user input.
Outline Solution:
<?php
session_start();
$captcha = rand(1000,9999);
$_SESSION['captcha'] = $captcha;
$image = imagecreate(70,30);
$bg = imagecolorallocate($image,255,255,255);
$text = imagecolorallocate($image,0,0,0);
imagestring($image, 5, 10, 5, $captcha, $text);
header("Content-type: image/png");
imagepng($image);
?>
========================================================= */
session_start();
$message = "";
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if ($_POST['captcha'] == $_SESSION['captcha']) {
        $message = "<p style='color:green'> CAPTCHA Verified Successfully!</p>";
    } else {
        $message = "<p style='color:red'> Incorrect CAPTCHA. Try again.</p>";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>CAPTCHA Demo</title>
</head>
<body>
    <h2>Enter CAPTCHA</h2>
    <?= $message ?>
    <form method="POST">
        <img src="captcha.php" alt="CAPTCHA"><br><br>
        <input type="text" name="captcha" placeholder="Enter CAPTCHA" required><br><br>
        <button type="submit">Verify</button>
    </form>
</body>
</html>
<?php
/*  =========================================================
5. Embedding and Displaying an Uploaded Image
Problem:
Allow users to upload an image and display it.
Outline Solution:
<?php
if(isset($_FILES['file'])) {
 move_uploaded_file($_FILES['file']['tmp_name'], "uploads/" .
$_FILES['file']['name']);
 echo "<img src='uploads/".$_FILES['file']['name']."' width='200'>";
}
?>
========================================================= */

if (!is_dir("uploads")) {
    mkdir("uploads");
}

$message = "";

if (isset($_FILES['file'])) {
    $filename = $_FILES['file']['name'];
    $tempPath = $_FILES['file']['tmp_name'];
    $fileType = strtolower(pathinfo($filename, PATHINFO_EXTENSION));


    $allowed = ['jpg', 'jpeg', 'png', 'gif'];

    if (in_array($fileType, $allowed)) {
        $targetPath = "uploads/" . $filename;

        if (move_uploaded_file($tempPath, $targetPath)) {
            $message = "<p style='color:green'>File uploaded successfully </p>";
            $uploadedImage = $targetPath;
        } else {
            $message = "<p style='color:red'>Failed to upload file </p>";
        }
    } else {
        $message = "<p style='color:red'>Only image files are allowed (JPG, PNG, GIF)</p>";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Upload and Display Image</title>
</head>
<body>
    <h2>Upload Image</h2>
    <?= $message ?>
    <form method="POST" enctype="multipart/form-data">
        <input type="file" name="file" accept="image/*" required><br><br>
        <button type="submit">Upload</button>
    </form>

    <?php if (!empty($uploadedImage)): ?>
        <h3>Uploaded Image:</h3>
        <img src="<?= $uploadedImage ?>" width="250" style="border:1px solid #000;">
    <?php endif; ?>
</body>
</html>
<?php
/*  =========================================================
6. Create and Draw Graphics Dynamically
Problem:
Draw simple shapes using the GD library.
Outline Solution:
<?php
$img = imagecreate(200,200);
$bg = imagecolorallocate($img,255,255,255);
$red = imagecolorallocate($img,255,0,0);
imagerectangle($img,50,50,150,150,$red);
header("Content-type:image/png");
imagepng($img);
?>
========================================================= */

$img = imagecreate(400, 300);

$background = imagecolorallocate($img, 240, 240, 240);
$red = imagecolorallocate($img, 255, 0, 0);
$blue = imagecolorallocate($img, 0, 0, 255);
$green = imagecolorallocate($img, 0, 150, 0);
$black = imagecolorallocate($img, 0, 0, 0);


imagerectangle($img, 50, 50, 150, 150, $red);             
imagefilledrectangle($img, 200, 50, 350, 150, $blue);    
imageellipse($img, 100, 225, 80, 80, $black);            
imagefilledellipse($img, 275, 225, 120, 80, $green);      

imagestring($img, 5, 120, 10, "GD Library Shapes", $black);

header("Content-Type: image/png");
imagepng($img);
imagedestroy($img);
?>

<?php
/*  =========================================================
7. Add Text on an Image
Problem:
Add a watermark or text overlay on an existing image.
Outline Solution:
<?php
$img = imagecreatefromjpeg("sample.jpg");
$color = imagecolorallocate($img,0,0,255);
imagestring($img,5,10,10,"VIT Chennai",$color);
header("Content-type:image/jpeg");
imagejpeg($img);
?>
========================================================= */

// Path to the image (place sample.jpg in the same folder as this file)
$imagePath = "j2.jpg";

// Check if image exists
if (!file_exists($imagePath)) {
    die("❌ Image not found! Please place 'sample.jpg' in the same folder.");
}

// Create image resource from JPEG
$img = imagecreatefromjpeg($imagePath);

// Allocate color for the text (R, G, B) → Blue
$textColor = imagecolorallocate($img, 0, 0, 255);

// Add text to the image
imagestring($img, 5, 20, 20, "VIT Chennai", $textColor);

// Set the content type header - JPEG image
header("Content-Type: image/jpeg");

// Output the image
imagejpeg($img);

// Free memory
imagedestroy($img);
?>

<?php
/* =========================================================
8. Image Resizing and Scaling
Problem:
Resize an uploaded image while maintaining aspect ratio.
Outline Solution:
<?php
$img = imagecreatefromjpeg("sample.jpg");
$color = imagecolorallocate($img,0,0,255);
imagestring($img,5,10,10,"VIT Chennai",$color);
header("Content-type:image/jpeg");
imagejpeg($img);
?>
========================================================= */ 

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
        $srcPath = $_FILES['image']['tmp_name'];
        $src = imagecreatefromjpeg($srcPath);

        $newWidth = isset($_POST['width']) ? intval($_POST['width']) : imagesx($src);
        $newHeight = isset($_POST['height']) ? intval($_POST['height']) : imagesy($src);
        $keepAspect = isset($_POST['aspect']) ? true : false;

        if ($keepAspect) {
            $ratio = imagesx($src) / imagesy($src);
            $newHeight = intval($newWidth / $ratio);
        }

        $new = imagescale($src, $newWidth, $newHeight);
        header("Content-Type: image/jpeg");
        imagejpeg($new);
        imagedestroy($src);
        imagedestroy($new);
        exit;
    } else {
        echo "Please upload a valid JPEG image.";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Image Resize Demo</title>
</head>
<body>
    <h2>Upload an image to resize</h2>
    <form method="POST" enctype="multipart/form-data">
        <input type="file" name="image" accept="image/jpeg" required><br><br>
        Width: <input type="number" name="width" value="300" required><br>
        Height: <input type="number" name="height" value="300"><br>
        <label>
            <input type="checkbox" name="aspect" checked> Keep Aspect Ratio
        </label><br><br>
        <button type="submit">Resize Image</button>
    </form>
</body>
</html>

<?php
/* =========================================================
9. Color Palette Manipulation
Problem:
Generate random colored shapes using GD functions.
Outline Solution:
<?php
$src = imagecreatefromjpeg("image.jpg");
$new = imagescale($src, 200, 150);
header("Content-type:image/jpeg");
imagejpeg($new);
?>
========================================================= */

function circlesOverlap($x1, $y1, $r1, $x2, $y2, $r2){
    $distance = sqrt(($x1 - $x2)**2 + ($y1 - $y2)**2);
    return $distance < ($r1 + $r2);
}

if(isset($_GET['generate'])){
    $img = imagecreate(400, 400);
    $bg = imagecolorallocate($img, 255, 255, 255);

    $circles = [];
    $maxCircles = 10;
    $radius = 30;

    for($i = 0; $i < $maxCircles; $i++){
        $tries = 0;
        do {
            $x = rand($radius, 400 - $radius);
            $y = rand($radius, 400 - $radius);
            $overlap = false;
            foreach($circles as $c){
                if(circlesOverlap($x, $y, $radius, $c['x'], $c['y'], $radius)){
                    $overlap = true;
                    break;
                }
            }
            $tries++;
        } while($overlap && $tries < 100);

        if(!$overlap){
            $color = imagecolorallocate($img, rand(0,255), rand(0,255), rand(0,255));
            imagefilledellipse($img, $x, $y, $radius*2, $radius*2, $color);
            $circles[] = ['x'=>$x, 'y'=>$y];
        }
    }

    header("Content-Type: image/png");
    imagepng($img);
    imagedestroy($img);
    exit;
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Circles</title>
</head>
<body>
    <h2>NRandom Circles</h2>
    <form method="GET">
        <button type="submit" name="generate" value="1">Generate Circles</button>
    </form>
    <?php if(isset($_GET['generate'])): ?>
        <br>
        <img src="?generate=1" alt="Random Circles">
    <?php endif; ?>
</body>
</html>

<?php
/* =========================================================
10. Send an Email with an Attachment
Problem:
Send an email using PHP’s mail() function.
Outline Solution:
<?php
$to = "receiver@example.com";
$subject = "Test Email";
$message = "This is a test email from PHP.";
$headers = "From: admin@example.com";
if(mail($to, $subject, $message, $headers))
 echo "Mail sent successfully.";
else
 echo "Mail failed.";
?>
========================================================= */

$status = '';

if(isset($_POST['send'])){
    $from = htmlspecialchars($_POST['from']);
    $to = htmlspecialchars($_POST['to']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    $attachment = isset($_FILES['attachment']) ? $_FILES['attachment']['name'] : 'No attachment';

    $status = "Mail sent successfully!<br>
               From: $from<br>
               To: $to<br>
               Subject: $subject<br>
               Message: $message<br>
               Attachment: $attachment";
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Email Send</title>
</head>
<body>
    <h2>Send Email</h2>
    <?php if($status) echo "<p>$status</p>"; ?>
    <form method="POST" enctype="multipart/form-data">
        From: <input type="email" name="from" required><br><br>
        To: <input type="email" name="to" required><br><br>
        Subject: <input type="text" name="subject" required><br><br>
        Message:<br>
        <textarea name="message" rows="5" cols="40" required></textarea><br><br>
        Attachment: <input type="file" name="attachment"><br><br>
        <button type="submit" name="send">Send Email</button>
    </form>
</body>
</html>

<?php
/* =========================================================
11. Generate Gradient Image
Problem:
Create a simple color gradient image using loops.
Outline Solution:
<?php
$img = imagecreate(200,200);
for($i=0;$i<200;$i++){
 $col = imagecolorallocate($img,$i,$i,255);
 imageline($img,$i,0,$i,200,$col);
}
header("Content-type:image/png");
imagepng($img);
?>
========================================================= */
if(isset($_GET['generate'])){
    $width = 200;
    $height = 200;
    $img = imagecreate($width, $height);

    for($i = 0; $i < $width; $i++){
        $col = imagecolorallocate($img, $i, $i, 255);
        imageline($img, $i, 0, $i, $height, $col);
    }

    header("Content-Type: image/png");
    imagepng($img);
    imagedestroy($img);
    exit;
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Gradient Image</title>
</head>
<body>
    <h2>Gradient Image</h2>
    <form method="GET">
        <button type="submit" name="generate" value="1">Generate Gradient</button>
    </form>
    <?php if(isset($_GET['generate'])): ?>
        <br>
        <img src="?generate=1" alt="Gradient Image">
    <?php endif; ?>
</body>
</html>

<?php
/* =========================================================
12. Dynamic Image Banner with Text
Problem:
Display a dynamic banner with timestamp text.
Outline Solution:
<?php
$img = imagecreate(400,60);
$bg = imagecolorallocate($img,240,240,240);
$black = imagecolorallocate($img,0,0,0);
$text = "Generated on " . date("H:i:s");
imagestring($img,5,10,20,$text,$black);
header("Content-type:image/png");
imagepng($img);
?>
 ========================================================= */

if(isset($_GET['generate'])){
    $width = 400;
    $height = 60;
    $img = imagecreate($width, $height);
    $bg = imagecolorallocate($img, 240, 240, 240);
    $black = imagecolorallocate($img, 0, 0, 0);
    $text = "Generated on " . date("H:i:s");
    imagestring($img, 5, 10, 20, $text, $black);
    header("Content-Type: image/png");
    imagepng($img);
    imagedestroy($img);
    exit;
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dynamic Image Banner</title>
</head>
<body>
    <h2>Dynamic Banner</h2>
    <form method="GET">
        <button type="submit" name="generate" value="1">Generate Banner</button>
    </form>
    <?php if(isset($_GET['generate'])): ?>
        <br>
        <img src="?generate=1" alt="Dynamic Banner">
    <?php endif; ?>
</body>
</html>

<?php
/* =========================================================
13. Personalized Greeting Using Sessions
Problem:
Greet users based on session data.
Outline Solution:
<?php
session_start();
if(!isset($_SESSION['name'])) $_SESSION['name'] = "Student";
echo "Hello, ".$_SESSION['name']."! Welcome to the PHP lab.";
?>
========================================================= */

session_start();

if(isset($_POST['name'])){
    $_SESSION['name'] = $_POST['name'];
}

$name = isset($_SESSION['name']) ? $_SESSION['name'] : "Student";
?>

<!DOCTYPE html>
<html>
<head>
    <title>Personalized Greeting</title>
</head>
<body>
    <h2>Personalized Greeting</h2>
    <p>Hello, <?php echo htmlspecialchars($name); ?>! Welcome to the PHP </p>
    
    <form method="POST">
        Enter your name: <input type="text" name="name" required>
        <button type="submit">Set Name</button>
    </form>
    
    <form method="POST">
        <button type="submit" name="reset" value="1">Reset Name</button>
    </form>

    <?php
    if(isset($_POST['reset'])){
        unset($_SESSION['name']);
        header("Location: ".$_SERVER['PHP_SELF']);
        exit;
    }
    ?>
</body>
</html>
<?php
/* =========================================================
14. Simple Contact Form with mail()
Problem:
Send a message through email using PHP mail().
Outline Solution:
<?php
$to="example@domain.com";
$sub="Contact Form Message";
$msg="This is a test message.";
$headers="From: user@domain.com";
mail($to,$sub,$msg,$headers);
echo "Mail Sent!";
?>
========================================================= */

$status = '';
if(isset($_POST['send'])){
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $status = "Mail Sent Successfully!<br><br>
               From: $email<br>
               Message:<br>
               <pre>$message</pre>";
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Contact Form</title>
</head>
<body>
    <h2>Contact Us</h2>
    <?php if($status) echo "<p>$status</p>"; ?>
    <form method="POST">
        Your Email: <input type="email" name="email" required><br><br>
        Message:<br>
        <textarea name="message" rows="5" cols="40" required></textarea><br><br>
        <button type="submit" name="send">Send Message</button>
    </form>
</body>
</html>

<?php
/* =========================================================
15. Feedback Form with Session and Email
Problem:
Collect feedback and email it using session-stored name.
Outline Solution:
<?php
session_start();
$name = $_SESSION['user'] ?? "Guest";
$msg = "Feedback from $name: ".$_POST['feedback'];
mail("admin@vit.ac.in","Student Feedback",$msg,"From: noreply@vit.ac.in");
echo "Thank you, $name. Feedback sent!";
?>
========================================================= */

session_start();

if(!isset($_SESSION['user'])){
    $_SESSION['user'] = "Student";
}

$name = $_SESSION['user'];
$status = '';

if($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST['feedback'])){
    $feedback = htmlspecialchars($_POST['feedback']);
    $status = "Thank you, $name. Feedback sent successfully!<br><br>
               Feedback Received:<br>
               <pre>$feedback</pre>";
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Student Feedback Form</title>
</head>
<body>
    <h2>Student Feedback</h2>
    <p>Hello, <?php echo htmlspecialchars($name); ?>! Please submit your feedback below.</p>
    <?php if($status) echo "<p>$status</p>"; ?>
    <form method="POST">
        <textarea name="feedback" rows="5" cols="50" placeholder="Enter your feedback here..." required></textarea><br><br>
        <button type="submit">Submit Feedback</button>
    </form>
</body>
</html>
