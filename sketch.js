const r = require("raylib");

const FPS = 60;
const WIDTH = 500;
const HEIGHT = 500;
const sheildX = 100;
const sheildY = 100;
const gunBodyX = 380;
const gunBodyY = 93;
const gunBodyWidth = 30;
const gunBodyHeight = 10;
const gunHandX = 400;
const gunHandY = 93;
const gunHandWidth = 10;
const gunHandHeight = 20;
const bulletWidth = 10;
const bulletHeight = 5;
let bulletX = 385;
let bulletY = 95;
let isTouched = false;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Shield & Gun");
    r.SetTargetFPS(FPS);
}

function update() {
    // Bullet moving
    if (bulletX >= sheildX && !isTouched) {
        bulletX = bulletX - 1.5;
        if (bulletX === sheildX) {
            isTouched = true;
        }
    }

    // Bounce from sheild
    if (isTouched) {
        bulletX = bulletX + 2;
        bulletY = bulletY + 2;
    }

    // Reset bullet
    if (bulletX > WIDTH || bulletY > HEIGHT) {
        isTouched = false;
        bulletX = 385;
        bulletY = 95;
    }
}

function drawShield() {
    r.DrawCircle(sheildX, sheildY, 60, r.RED);
    r.DrawCircle(sheildX, sheildY, 50, r.LIGHTGRAY);
    r.DrawCircle(sheildX, sheildY, 40, r.RED);
    r.DrawCircle(sheildX, sheildY, 30, r.BLUE);
}

function drawShieldStar() {
    r.DrawLine(100, 80, 110, 90, r.WHITE);
    r.DrawLine(110, 90, 120, 90, r.WHITE);
    r.DrawLine(120, 90, 110, 100, r.WHITE);
    r.DrawLine(110, 100, 120, 115, r.WHITE);
    r.DrawLine(120, 115, 100, 105, r.WHITE);
    r.DrawLine(100, 80, 90, 90, r.WHITE);
    r.DrawLine(90, 90, 80, 90, r.WHITE);
    r.DrawLine(80, 90, 90, 100, r.WHITE);
    r.DrawLine(90, 100, 80, 115, r.WHITE);
    r.DrawLine(80, 115, 100, 105, r.WHITE);
}

function drawBullet() {
    r.DrawRectangle(bulletX, bulletY, bulletWidth, bulletHeight, r.BROWN);
}

function drawGun() {
    r.DrawRectangle(gunBodyX, gunBodyY, gunBodyWidth, gunBodyHeight, r.BLACK);
    r.DrawRectangle(gunHandX, gunHandY, gunHandWidth, gunHandHeight, r.GRAY);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    drawShield()
    drawShieldStar()
    r.DrawText("Captain America's Sheild", 10, 170, 16, r.BLACK);
    drawBullet()
    drawGun()
    r.DrawText("Gun", 380, 120, 16, r.BLACK);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};