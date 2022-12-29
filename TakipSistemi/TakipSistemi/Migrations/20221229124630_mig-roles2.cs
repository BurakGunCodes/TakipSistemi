using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TakipSistemi.Migrations
{
    /// <inheritdoc />
    public partial class migroles2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "RoleName",
                table: "AspNetRoles",
                newName: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "AspNetRoles",
                newName: "RoleName");
        }
    }
}
